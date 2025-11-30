# Continuous Deployment Using AWS CodePipeline and S3

This repository contains the code used in the related YouTube tutorial:
[https://youtu.be/iXXuv3ksYX4?si=GrQBoTRrrtvQkY7Y](https://youtu.be/iXXuv3ksYX4?si=GrQBoTRrrtvQkY7Y)

![Uploading image.png…]()

A simple web-based game is hosted on GitHub. You’ll create an S3 bucket for static website hosting, then build a continuous deployment pipeline using AWS CodePipeline so that updates are automatically deployed whenever code changes are pushed to GitHub.

## The Game

This project is a simple memory-matching game. The user clicks two cards (meme images) to find matching pairs:

* If the cards match, they disappear from the game board.
* If they do not match, they flip back over so the user can try again.

The game is built with **HTML, CSS, and JavaScript**.

### Ideas for Future Enhancements

* Add a scoring system
* Add a timer
* Introduce more cards
* Add multiplayer features to compare scores

## Deployment Environment

The game is hosted as a **static website on Amazon S3**.

## Deployment Pipeline

The CI/CD pipeline is created using **AWS CodePipeline**.
It automatically:

1. Pulls code from GitHub
2. Detects changes
3. Deploys updated files to the S3 bucket

## Cost

All services used in this tutorial are eligible for the **AWS Free Tier**.
However, charges may apply over time, so it is recommended to delete or shut down resources once you finish the tutorial.
