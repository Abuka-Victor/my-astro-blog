---
author: Victor Abuka
pubDatetime: 2025-08-23
modDatetime: 2025-08-23
title: Secure a VPS for Claude Code
slug: secure-a-vps-for-claude-code
featured: false
draft: true
---
## Introduction

I think everyone on Tech Twitter by now knows who Pieter Levels is. If you do not, you need to spend more time getting into tech twitter first then come back here and grab all the jokes. Google him or something.

So this guy, Pieter Levels is championing an idea. The idea is dead simple. Deploy stuff on a cheap VPS and scale from there as you need to. Don't over engineer anything you build at least from the get go. Which seems like pretty obvious advice until you get into it and see that on average it's typical to use an EKS to release version 0.1 of a todo app.

So a lot of people now have gone into the "raw dogging" tech stack which is simply a cheap VPS with claude code installed. Which works well for magic until you start spilling tea.

This is the point of this guide. Think of it as VPS security for dummies. Any other security expert advice can build on top of this framework with minor tweaks here and there. Whenever you buy a new VPS just come here to tick all the boxes one by one to be sure you can sleep well at night knowing that no one would succeed with just brute forcing their way into your server.

> This guide does not tell you how to not share passwords through get requests and other related mishaps that can come from the code itself.

## Step 1 - Set a very long and stupid password.

Make it at least 24 characters. Some providers allow you set it when you buy the VPS while others set it for you and email you the credentials. However it happened here is a very simple way to reset it and make it very long and stupid like I'm recommending.

First you need to ssh into the server using:

```
ssh root@<server_ip_address> 
```

some providers might use administrator instead of root. It's usually something like that though so whatever it is, find it and replace "root" with what you have.

when you're in you need to run this:

```
passwd
```

Then you type the new password and confirm it. Alternatively you could disable password login entirely and use ssh keys\* but if you have multiple servers then you have to think of a way to back up and manage all of your keys. If that's too much hassle just use password based auth jeje. ;)

> *   \- With ssh keys a file is saved on your machine that lets your vps basically perform that login handshake with only you. Anybody without that file cannot login to your vps at all.
>     

## Step 2 - Get the latest updates

There would always be security patches and updates to make to software just like some other people will always find new ways to break into stuff. My guess here is that you have a linux based server, if you're still reading this then that's probably true. The package manager is apt. You can get the latest updates by running the following.

```
apt update && apt upgrade -y
```

The update part pulls the latest versions of all packages and services that your VPS uses and the upgrade part goes ahead to install those things. The -y flag just says yes to any question that might come up during the update and upgrade.

## Step 3 - Create a new user