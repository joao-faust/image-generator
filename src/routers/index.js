const { Router } = require("express");
const { createCanvas } = require("canvas");
const { isNumeric } = require("../services/utils");

const router = Router();

router.get("/", (req, res) => {
  const { width, height, fontSize, font, text, bgColor, color } = req.query;
  const finalWidth = width && isNumeric(width) ? Number(width) : 250;
  const finalHeight = height && isNumeric(height) ? Number(height) : 250;
  const finalFontSize = fontSize ? `${fontSize}px` : "26px";
  const finalFont = font ? font : "Arial";
  const finalText = text ? text : "Unknow";
  const finalBgColor = bgColor ? bgColor : "#fff";
  const finalColor = color ? color : "#000";

  const canvas = createCanvas(finalWidth, finalHeight);
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = finalBgColor;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.font = `${finalFontSize} ${finalFont}`;
  ctx.fillStyle = finalColor;
  const textMetrics = ctx.measureText(finalText);
  const textWidth = textMetrics.width;
  const x = (canvas.width - textWidth) / 2;
  const y = canvas.height / 2 + 3;
  ctx.fillText(finalText, x, y);

  res.set("Content-Type", "image/png");
  res.send(canvas.toBuffer("image/png"));
});

module.exports = router;
