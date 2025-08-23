---
author: Victor Abuka
pubDatetime: 2025-08-23
modDatetime: 2025-08-23
title: Secure a VPS for Claude Code
slug: secure-a-vps-for-claude-code
featured: false
draft: true
---
I think everyone on Tech Twitter by now knows who Pieter Levels is. If you do not, you need to spend more time getting into tech twitter first then come back here and grab all the jokes. Google him or something.

So this guy, Pieter Levels is championing an idea. The idea is dead simple. Deploy stuff on a cheap VPS and scale from there as you need to. Don't over engineer anything you build at least from the get go. Which seems like pretty obvious advice until you get into it and see that you need an EKS to release version 0.1 of your todo app.

So a lot of people now have gone into the "raw dogging" tech stack which is simply a cheap VPS with claude code installed. Which works well for magic until you start spilling tea.

This is the point of this guide. Think of it as VPS security for dummies. Any other security expert advice can build on top of this framework with minor tweaks here and there.