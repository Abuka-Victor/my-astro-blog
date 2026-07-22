---
author: Victor Abuka
pubDatetime: 2026-07-22
modDatetime: 2026-07-22
title: "AI From Scratch #1: What AI Actually Is (And What It Isn't)"
ogImage: AI From Scratch Episode 1 — What AI Actually Is
slug: ai-from-scratch-what-ai-actually-is
featured: true
draft: false
tags:
  - AI
description: AI, machine learning, neural networks, deep learning. An engineer's
  plain-English breakdown of what all this actually means.
---
I'm a little late to the party, I know, but I've been trying to wrap my head around AI for a while now. I'm finally working on a project where I need to train a model to predict beam forming parameters to track a UAV. Basically using machine learning to steer the beam and keep the signal quality consistently strong.

So this series is dedicated to understanding AI from scratch. The goal is to be able to understand conversations and meaningfully contribute to the field. I am writing these as I discover things and as I understand them.

Let's begin with the questions I have asked on the topic before we go into more technical matters in other episodes.

## What is AI?

Artificial Intelligence or AI is any effort to make computers intelligent. I know that definition uses the word 'intelligent' again but stay with me. Intelligence in this context is simply the ability to make decisions. If it can make decisions grounded in context then it is intelligent.

AI is an umbrella term. It encompasses all of the efforts to make the computer think or appear to be smart. With this understanding, then even a simple conditional statement can pass as AI.

## What is Machine Learning?

Remember AI is any effort to make computers intelligent. Machine learning is one of those efforts. Other efforts include:

1. Rule based systems - These are huge IF based databases and they were the standard before machine learning came along.
2. Search Algorithms - These work by finding the optimal path or solution. They explore a tree of possible options, score the outcomes at the ends of the branches, and work backwards to pick the best one. The clever part is that they can prove certain branches aren't worth exploring at all, so they skip them entirely instead of checking every possibility.
3. Fuzzy Logic systems - Typical computing works with very hard definitions, 1s and 0s. Fuzzy logic allows computers to reason in in-betweens like warm instead of just hot or cold.

This is not an exhaustive list, it's just the ones I understand right now.

Now the main premise of Machine Learning as an effort is that you give the computer data to learn from and the computer finds patterns in the data instead of being explicitly programmed.

Now within machine learning itself, there are three ways the computer can learn. This part confused me for a while, in fact I had a tense argument with one of my lecturers on this. Let me break it down for you.

**Supervised learning** is learning with an answer sheet. You give the computer the questions and the correct answers together. This is a picture of a cat. This is another picture but it's a dog. Do this thousands of times and the system starts to figure out what makes a cat a cat. You might not know how exactly it's knowing but somehow it knows. I like to say that it cooks its own brain. The catch is somebody has to sit down and label all that data first. That somebody is a human being.

**Unsupervised learning** is learning with no answer sheet at all. You just dump the data and say find me something in here. The system can't tell you what the things are because nobody told it any names, but it can tell you which things belong together. So it might group your customers into five clusters and you look at the clusters and realise oh, these ones only shop on weekends. It will find the pattern, but you will supply what those patterns mean in the context of your application.

**Reinforcement learning** is learning by consequences. No answer sheet, but there is a score. The computer tries something then it gets rewarded or punished, and adjusts. Nobody tells it what the right move is. It just keeps playing until it figures out which moves gain points. This is how you train something to play a game or balance a robot.

Also, almost everything I'm about to list is supervised. :-D

## What is a neural network?

A neural network is one of the methods of machine learning. Just like machine learning is just one of the methods of AI. Other methods include:

1. Decision trees and Random Forests - Decision trees build a series of if/else blocks based on data. A random forest combines multiple decision trees and takes a majority vote. Like relying on the wisdom of crowds. The idea here is saying that many decision trees are wiser than any one of them.
2. Support Vector Machines (SVM) - This method is like the opposite of line of best fit in high school math. So you give it a plot and it finds a line that separates two classes of things with the widest gap between them. This optimal line is called a hyperplane.
3. Linear and Logistic Regression - Linear regression can predict a continuous number and Logistic regression can predict a number between 0 and 1, a probability. Like a Sigmoid. What happens here is that you form an equation from data, it kind of looks like a straight line equation from high school geometry. After you get the equation, the line really, you can predict any Y given any X. All you need to do is to substitute for X in the equation and punch a calculator and you get the prediction for your Y value. Now the process of forming your weights/constants in the equation would be training the model.
4. K-Nearest Neighbours (KNN) - This is a peer pressure algorithm used for classification. Here if a data point is surrounded by dogs, the data point itself is a dog. That is the idea here. It can be used in recommendation engines.

Again this is not an exhaustive list.

Now the main idea of a neural network is that it is inspired by a brain. The neurons are interconnected in layers and each layer processes and passes its output to the next one. Like the way neurons fire in steps in the brain.

There are a few types of neural networks I have heard of like Convolutional Neural Network (CNN) and Recurrent Neural Network (RNN) and Transformers (LLMs came from this). But the basic type is called MLP or Multilayer Perceptron. The key take away here is this, a neural network is a machine learning method that is inspired by a brain and learns by passing data through the layers of its neurons.

The other types of machine learning rely heavily on human guidance while neural networks can learn directly from far less refined data. It can work out for itself which features of the data matter. Hence they perform very well with unstructured raw data but they require massive massive amounts of data to become useful. They are also considered as black boxes because after training it is near impossible to trace the data flow and determine why a decision was made or not. But for some other methods you can actually do that.

## What is deep learning?

This is just a neural network with a lot of layers. Every deep learning model is a neural network but not all neural networks qualify as deep learning. A neural network has an input layer, at least one hidden layer and an output layer. When it comes to the hidden layer, deep learning models can have hundreds of them while a neural network might have max 2.

This is also where the parameters thing comes from when you hear 70 billion parameters, this is deep learning. All other things being equal, the 70b model will have more "sense" than a 3b model. 1b model still counts as deep learning. An ordinary neural network will have from hundreds to millions of parameters.

If you're learning this too, consider following me and we'll go through it together.

Okay, it's a lot to take in. Next episode we find out how the machine actually cooks its own brain. Loss functions, gradient descent, and why models are so hungry for data.