---
author: Victor Abuka
pubDatetime: 2025-10-14
modDatetime: 2025-10-14
title: "How a VPN Works: A Technical Mind Map"
slug: how-a-vpn-works-technical-mind-map
featured: true
draft: false
tags:
  - cybersecurity
  - mind-maps
description: Learn exactly how a VPN works. The technical architecture and the
  core technologies required to build your own VPN.
---
A while ago a classmate told me he had built a VPN in Java for his final project and I found it very interesting. Too interesting in fact to leave the idea alone.

I found that I really didn't know what a VPN really was even though I had used it so many times. So this article is a technical mind map of what I found. I will be exposing my approach to thinking about the technology itself and the questions I asked myself. Right now, there are two layers of understanding to this for me. I will update these layers when I found out more things. The first layer is the conceptual overview of how a VPN works. The second layer is more architectural, so if you wanted to build one yourself how would you do it? That's the question the second layer answers. So let's dive right in.

\---

\## The Conceptual Overview: What is a VPN?

A VPN stands for **Virtual Private Network**. Taking each word apart from the rear, we can easily tell there's network engineering involved, then some cybersecurity, and finally, it's **virtualized** as in a logical rather than physical thing. In software engineering, 'virtualized' generally means it's replicating some hardware function on software. So what does it do really?

Simply put, it allows you to access a network (whether LAN or WAN) **securely** over the internet. **Access** and **Securely** being the two most important words there. The typical example you'd find is of an office. Let's assume this office runs an intranet, so things like the official communication channel, files, etc., are hosted on a physical server that is within the office premises. Whenever you're in the office, you can access these services just by typing the IP address (or domain name) in your browser or looking through the networks tab of your file explorer. This is because you are connected to the very same network as the servers that host these things and you probably have network discovery turned on on your work device.

Now whenever you are outside the office, you cannot access these services and documents because you are no longer within the same local network. But if your office connects these servers to the internet, and you are also connected to the internet where you are, then by design you should be able to make a request across the internet to your office servers and they should be able to respond. So what's the problem here? Well, if it's over the public internet that you make these requests, then _technically_ it's open for everyone to see, and your work information flying over the airways can be sniffed and potentially stolen. By extension, the data could have easily been your banking information, passwords, personal identification details, and other very important and very personal data. A solution to this is a VPN. This brings us to the question the first layer answers, which is, aside from the acronym, what is a VPN?

If you google this question, you'd most likely see something along the lines of a VPN is a secure encrypted tunnel that protects your internet traffic, masks your IP address, and some other amazing things. So following from the scenario above, when you turn on your VPN on your work device, your internet traffic is suddenly no more open, visible, or accessible to the public internet. It encrypts your traffic from your device, and when it gets to the **VPN server**, it is decrypted and then forwarded to the internet or the services you want to access.

This VPN tunnel would have two parts: the **VPN client** on your device and the **VPN server** at the other end. The server waits for connections from the client so that it can make requests to the internet on behalf of the client and then send the results back. As a side effect, your IP address is also changed, which makes it look like you're in another country. If your requests/internet traffic is not encrypted (and tunnelled) then this is merely a proxy server. You request is just bouncing off of another server before it goes to the internet. But when you have a proxy plus encryption (and tunnelling) then congrats, you have a VPN.

\---

\## The Architectural Layer: Building Your Own VPN

Now on to the second question: if I wanted to build my own VPN, how would I do it? You might think it's difficult on the surface, and you would be right to think that, but once you get the core things figured out, the components stack nicely on top of each other to give you the desired result. At this point, you already know you would need two things: the VPN server and the VPN client. These two things are software you can write in any programming language of your choice.

A VPN has three core components and one extra component that wraps everything together:

1\. **A Virtual Network Adapter (the tunnel)**

2\. **Transport**

3\. **Encryption**

The last thing that wraps everything together are just the headaches (essential security and management mechanisms) that keep the whole thing super secure, like auth handshakes, pre-shared keys, keep-alive requests, session management etc. These things are peripherals but they help run a tight ship in terms of a VPN service. We would start building from the perspective of the VPN client. So let's break it down.

\### The Virtual Network Adapter (TUN/TAP)

I'll explain it this way: growing up, I used to play Blur on LAN parties with my friends. We connected everyone with ethernet cables and could share files because we were all connected to the same network. This kind of connection is made when you plug an ethernet cable into your computer. The cable speaks to the **Network Adapter** hardware, your NIC (Network Interface Card).

A **virtual network adapter** is software that mimics the behaviour of being physically plugged in to a network. Note that when you're plugged into a network, all the requests you make go through your physical network adapter. This is the exact same concept with your virtual network adapter, but you can choose what kind of traffic passes through it. It could be all internet traffic or just some.

In a bit more detail, when you turn on the VPN service, it creates this virtual network adapter, which can be read and written to like a file descriptor. You will find it referred to as a **TUN/TAP interface**. If you choose for all internet traffic to go to this virtual interface then when you request for a page in your browser, the browser passes the request to the OS to pass to it's network stack but then the OS sees your virtual network adapter and then writes the users request to your virtual network adapter instead. So in your VPN program you can read this request and chose what to do with it. This has now gotten us to the transport section.

\### Transport, Encryption, and Encapsulation

VPNs usually send encrypted traffic over the internet and there are a number of protocols by which devices talk to one another over the internet. You need to pick one to use (heck you could write your own protocol too!). But generally speaking, TCP and UDP are common transport protocols when it comes to transport with VPNs. Both come with their own headaches so research the best one for your use case. I particularly like UDP because of its statelessness which could be a pro or a con depending on how you look at it.

The transport effectively establishes a way to communicate with the VPN server so you can send the user's request that you have read from your virtual network adapter.

Before you send the request, you need to process it. This is where the **encryption and encapsulation** come in. You can encrypt the entire package with pre-shared keys or whatever type of encryption you deem fit. The encapsulation typically includes slapping on some new request headers to the encrypted data.

\### The VPN Server

Okay, the VPN client is able to send encrypted packets over to the server, so now we shift our focus to the server.

The first thing we want to do is to setup our transport in order to receive the packets. If you used UDP on the client then you'd need to setup a UDP server on the VPN server so that the UDP client on the VPN client can connect to it and send those packets in the first place. You might decide to use TCP and the flow would be the exact same. There has to be a way for the packets to reach the server because this is your entry point.

At this point you might want to setup some of those headaches that we talked about previously so that not just anybody can connect to your server. Establishing a proper peer system would do some good here so only verified peers can send requests in the first place. Every other type of request should be ignored. Your VPN server itself should be a secure machine \[(you can check here to see steps on how to get to the minimum security any server should have)\]([https://www.victorabuka.com/posts/secure-a-vps-for-claude-code/](https://www.victorabuka.com/posts/secure-a-vps-for-claude-code/)).

After receiving the packets securely, the next step would be to decrypt them and forward them to the internet. You already know what we're about to do here. If you guessed that we would create a virtual network adapter (TUN/TAP) on the VPN server then you are 100% correct. We do this because the same way we can read from it on the client we can write to it so that the OS picks it up and sends it to its networking stack and makes the request for us.

When the OS gets the response from the internet, it writes the packets back to the virtual network adapter and we can read this response and send it back the way the request came. Finally the VPN client sees this response from the VPN server and sends it to its own virtual network adapter on the client device which then passes it to the user's OS and finally the OS passes it to the browser and the user sees the response.

Congratulations you now have a VPN, it seems like a long journey but it happens pretty fast (when implemented without unnecessary latency from bad code). Now since the real device that makes the request to the internet is the VPN server this whole concept has the effect of masking a user's real IP address. If you are thinking of implementing a VPN you should really checkout the WireGuard protocol. VPN protocols are opinionated ways of doing this whole thing, they give you a recipe to follow for the primary steps and even the headaches (sessions/auth/handshakes, etc).

This is my current mind map of how a VPN works on a technical level. I am open to comments, contributions, or questions.

This article was originally posted on \[CoderLegion\]([https://coderlegion.com/6433/how-a-vpn-works-a-technical-mind-map](https://coderlegion.com/6433/how-a-vpn-works-a-technical-mind-map))