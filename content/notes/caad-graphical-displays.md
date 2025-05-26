---
title: "Graphical Displays Brief"
date: 2025-05-26
tags: ["graphics", "caad", "Architecture", "Design", "System"]
draft: false
---

# Graphical Displays Workings in Computer Systems

Most graphical devices now use LCD display, Liquid Crystal Display, which has a chemical polymer trapped between two glass surface, which blocks or transmits the light based on the electrical charges applied to it.

The chemical polymer contains rod shaped molecules that forms a helix shape and bends the light entering the display, from a source or some kind of reflection. When electrical charge is applied, the rod-shaped molecules straighten out and no longer bend the light, since liquid chemical is trapped between two screens polarized at 90 degrees, the light cannot pass through it unless it is bent. The graphics is displayed to the user by sending appropriate electrical charges, which bends the light from the screens and graphics is displayed in the screen.

In modern displays, they use active matrix, which has tiny transistor switch in each pixel to control the current and make the images sharper.
A RGB(Red, Green, Blue) mask is associated with each pixel to determines the intensity of each color on shown on the screen.

An image is composed of matrix of pixels, which is represented by matrix of bits, this is also known as `bitmap`. A color active matrix typically uses `8 bits` to represent each value of RGB, which is `24 bits` in total and thus allows millions of colors to be allowed to be displayed on the screen.

Raster Refresh Buffer also known as Frame Buffer is a location in memory that stores the pixel data that will be shown to display.
It stores RGB and sometimes `A (Alpha)` values as well, if the displays support color active matrix display as well as alpha values.

