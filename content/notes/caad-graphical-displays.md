---
title: "Graphical Displays Brief"
date: 2025-05-26
tags: ["graphics", "CAAD", "Book", "Architecture", "Design", "System"]
draft: false
---

# Graphical Displays Workings in Computer Systems

<!--toc:start-->
- [Graphical Displays Workings in Computer Systems](#graphical-displays-workings-in-computer-systems)
  - [LCDs Structure and Operation](#lcds-structure-and-operation)
  - [Mechanism of Light control](#mechanism-of-light-control)
    - [Using Natural Light](#using-natural-light)
    - [Using a Backlight](#using-a-backlight)
  - [Active Matrix with TFT, RGB & Color Depth](#active-matrix-with-tft-rgb-color-depth)
  - [Raster Refresh Buffer/Frame Buffer and Alpha Channel](#raster-refresh-bufferframe-buffer-and-alpha-channel)
<!--toc:end-->

## LCDs Structure and Operation
Most graphical devices now use LCDs (Liquid Crystal Display) display. It consists of a liquid crystal chemical polymer trapped between two glass surfaces. The liquid crystal chemical changes its alignment when an electrical charge is applied, that changes how it interacts with light and determines whether to let light pass through or block it, which results in images being shown in the screen.

## Mechanism of Light control

### Using Natural Light
Light enters the screen from the front and passes through the liquid crystal layer. The liquid crystals, when not charged, are twisted and can rotate the direction (polarization) of the light, allowing it to pass through the second polarizing filter and reflect back to your eyes. When a charge is applied, the liquid crystals straighten out, so the light is blocked by the polarizer and does not reflect, making that part of the screen appear dark. This method does not need a backlight because it uses ambient light and a reflective backing.

### Using a Backlight
The backlight shines light through the back of the screen. This light passes through the liquid crystal layer and two polarizing filters. Each pixel contains liquid crystals that are twisted in their natural state or straight when an electrical charge is applied. When twisted, they allow some light to pass through; when straightened, they block the light. By controlling each pixel, the display can show different colors and images, even in the dark.

## Active Matrix with TFT, RGB & Color Depth
In modern displays, they use active matrix, which has thin-film transistor switch in each pixel to control the voltage precisely and make the images sharper. A RGB(Red, Green, Blue) mask is associated with each pixel to determines the intensity of each color on shown on the screen. An image is composed of matrix of pixels, which is represented by matrix of bits, this is also known as `bitmap`. A color active matrix typically uses `8 bits` to represent each value of RGB, which is `24 bits` in total and thus allows millions of colors to be allowed to be displayed on the screen.

## Raster Refresh Buffer/Frame Buffer and Alpha Channel
Raster Refresh Buffer also known as Frame Buffer is a section in memory that stores the pixel data that will be shown on the display.
It stores RGB values for each pixels and sometimes `A (Alpha)` values as well to represent transparency, The use of an `alpha` channel is common in digital graphics, but not all display hardware supports alpha bending.


## References

1. David A Patterson, John L Hennessy "Computer Organization and Design: The Hardware/Software Interface" (5th ed.). MK.

2. Phidgets. "LCD Character Display Guide", [Online]. Available: https://www.phidgets.com/docs/LCD_Character_Display_Guide#How_it_works

