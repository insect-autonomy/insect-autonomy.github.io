---
title: "Speakers"
description: "Invited speakers and status"
updated: "2026-08-24"

confirmed:
  - name: "Yiannis Aloimonos"
    affiliation: "University of Maryland, College Park"
    status: ""
    photo: "/speakers/aloimonos.jpg"
    website: "https://www.prg.cs.umd.edu/"
    scholar: "https://scholar.google.com/citations?user=7QmEsOwAAAAJ"
    linkedin: "https://www.linkedin.com/in/yiannis-aloimonos-6374865"
    talkTitle: "Purposive Memory and Purposive Perception: A key to insect-scale autonomy"
    abstract: >-
      Robots are built to act in the real world; at the insect scale, power,
      memory, sensing, and computation become severe constraints. We propose a
      different foundation for autonomy: a purposive perception–memory–action loop.
      Our central thesis is that navigation is not primarily a mapping problem; it
      is a memory problem, shaped by what perception chooses to extract for action.

      Insects provide a biological proof of principle. Bees, ants, and flies navigate
      complex environments with remarkably small nervous systems by extracting
      behaviorally relevant sensory information and maintaining compact navigational
      variables. What we take from insects is a computational principle, not a blueprint:
      perceive only what updates the task state, and remember only what must persist for
      future action.

      For robotics, this means memory should match the structure of the variable it
      represents: a ring for heading, and richer structures only when the behavior
      demands them. Through experiments in purposive perception and structured spatial
      memory, we show how such frugal representations keep a robot acting under
      degraded and intermittent sensing, showing how frugality and structure can
      become sources of robustness.

      The guiding question is not “how do I reconstruct the world?” but “what is the
      least a robot must perceive and remember in order to act?”
    abstractCredit: "A Socratic Dialog – Yiannis Aloimonos and Naitri Rajyaguru, Computer Vision Lab, Univ. of Maryland"
    bio: >-
      Yiannis Aloimonos is Professor of Computational Vision and Intelligence at the
      Department of Computer Science, University of Maryland, College Park, and the
      Director of the Computer Vision Laboratory at the Institute for Advanced
      Computer Studies (UMIACS). He is also affiliated with the Institute for Systems
      Research and the Neural and Cognitive Science Program. He was born in Sparta,
      Greece and studied Mathematics in Athens and Computer Science at the University
      of Rochester, NY (PhD 1990). He is interested in Active Perception and the
      modeling of vision as an active, dynamic process for real time robotic systems.
      For the past five years he has been working on bridging signals and symbols,
      specifically on the relationship of vision to reasoning, action and language.
      He received the Presidential Young Investigator Award from President Bush and
      the Bodossaki Prize in Artificial Intelligence. He is an IEEE Fellow.

  - name: "Vijay Janapa Reddi"
    affiliation: "Harvard University"
    status: ""
    photo: "/speakers/reddi.jpg"
    website: "https://vijay.seas.harvard.edu/"
    scholar: "https://scholar.google.com/citations?hl=en&user=gy4UVGcAAAAJ"
    linkedin: "https://www.linkedin.com/in/vijay-janapa-reddi-63a6a173"

  - name: "Frances Chance"
    affiliation: "Sandia National Laboratories"
    status: ""
    photo: "/speakers/chance.jpg"
    website: "https://www.sandia.gov/ccr/staff/frances-s-chance/"
    scholar: "https://scholar.google.com/scholar?hl=en&q=%22Frances+S.+Chance%22"
    linkedin: "https://www.linkedin.com/in/frances-chance-7528a266"
    talkTitle: "The Computer Bug You Want: Insect-Inspired Neuromorphic Primitives for Energy-Efficient Computation"
    abstract: >-
      Animals excel at a range of essential behaviors, for example hunting or
      foraging, that require fast calculations under tight energy constraints.
      Identifying key computational primitives of biological nervous systems is
      critical for developing artificial systems that can similarly perform even
      with limited energy budgets. Insects perform surprisingly complex tasks
      given the relatively small size of their brains. I will present work
      focused on developing energy-efficient neuromorphic computing primitives
      derived from single-neuron computational primitives of insect nervous
      systems. For example, we have recently developed an analog neuromorphic
      emulation of shunting inhibition, a biophysical mechanism that approximates
      real-time multiplication in the Drosophila T4 dendrite, and leveraged this
      circuit primitive in a range of biologically-inspired applications,
      including coordinate transformations and dynamic gain normalization. I
      will discuss ongoing work to leverage these neuromorphic primitives for
      energy-efficient artificial intelligence models, and how these models may
      impact on-board compute and edge-AI hardware.
    bio: >-
      Frances Chance received her MS and PhD from Brandeis University, and her
      BS from the California Institute of Technology. She is currently a
      Distinguished Member of the Technical Staff in the Center for Computing
      Research at Sandia National Laboratories. Her research applies knowledge
      of biological nervous systems and neural circuit operations to develop and
      constrain novel neural-informed algorithms and brain-based technologies.

  - name: "Geoffrey Barrows"
    affiliation: "Centeye, Inc."
    status: ""
    photo: "/speakers/barrows.jpg"
    website: "https://www.centeye.com/"
    scholar: "https://scholar.google.com/scholar?q=%22Geoffrey+L.+Barrows%22"
    linkedin: "https://www.linkedin.com/in/geoffrey-l-barrows"
    talkTitle: "What can you do with a few thousand pixels?"
    abstract: >-
      The costliest element in the SWaP budget of a small robotic vision system is
      generally not the image sensor but the processing behind it. In earlier work
      we implemented several vision-based flight control tasks using just tens to
      hundreds of pixels. Reflections on what worked, and on the differences between
      contemporary computer vision and biological vision, led us to a metric we call
      pixels per frame: the visual motion, measured in pixels or photoreceptors,
      accruing in one frame or update. Conventional computer vision operates above
      one pixel per frame, which carries steep downstream processing costs. Our
      implementations operate below this threshold, as do event cameras, and we
      argue biological systems do as well. Below that line, new kinds of image
      sensor arrays and new classes of algorithms become available, and the
      processing burden drops sharply. This talk covers the metric, example image
      sensors, and use cases.
    bio: >-
      Geoffrey Barrows is the founder of Centeye, Inc., where he develops
      neuromorphic vision chips and low-SWaP sensing systems for difficult
      applications. He holds a PhD from the University of Maryland, College Park,
      and previously worked at the Naval Research Laboratory. His interest in
      insect-inspired vision dates to 1999, when he built and flew a neuromorphic
      optical flow sensor on a small air platform.

  - name: "Prophesee AI"
    affiliation: "Prophesee AI"
    status: ""
    photo: "/speakers/prophesee.jpg"
    website: "https://www.prophesee.ai/"
    scholar: ""
    linkedin: "https://www.linkedin.com/company/chronocam"

  - name: "Elia Cereda"
    affiliation: "Dalle Molle Institute for Artificial Intelligence"
    status: ""
    photo: "/speakers/cereda.jpg"
    website: "https://idsia-robotics.github.io/nanorobotics/"
    scholar: "https://scholar.google.ch/citations?user=GPJziQsAAAAJ"
    linkedin: "https://www.linkedin.com/in/elia-cereda-65093bb1"
    talkTitle: "Closing the Loop at Insect Scale: Lessons from Performance-optimized Software Architectures for Nano-UAVs"
    abstract: >-
      Insect-scale robots must rely on ultra-low power resource-constrained MCUs for perception-to-action onboard intelligence. At the nano-UAV scale, i.e., 10 cm, tens of grams, and sub-100mW perception, much research concentrated on TinyML models, controllers, and          bio-inspired algorithms, while treating the underlying software infrastructure as an implementation detail. This choice is costly: across state-of-the-art nano-UAV systems, closed-loop throughput falls 16–92% short of inference workloads in isolation.  Our in-          field experiments show the lost throughput directly degrades closed-loop performance, e.g., up to 30% higher position error and mission success dropping from 100% to 40%. This talk builds on NanoCockpit, our open-source performance-optimized application framework       for the 27-gram Crazyflie that recovers the ideal throughput, now being integrated into the platform's official software. From this experience, the talk distills broader lessons for insect-scale autonomy, such as zero-copy, memory-efficient software abstractions,       latency-efficient sensing-to-control pipelines, and the software stack as a pillar of the overall system design.
    bio: >-
      Elia Cereda is a postdoctoral researcher at the Dalle Molle Institute for Artificial Intelligence (IDSIA, USI-SUPSI) in Lugano, Switzerland, where he received his Ph.D. in 2026. He researches robust AI for autonomous pocket-sized robotic platforms, spanning             performance-optimized software infrastructure, TinyML generalization under domain shift, and self-supervised on-device learning to bridge the gap between lab and real world. He authored more than 15 publications, including Best Paper Awards at IEEE ICCE'18 and          ACM EWSN'23 SPICES, and the first demonstrations of on-device learning aboard nano-drones. He was part of the winning team of the first "Nanocopter AI Challenge" at IMAV'22.
---

Listed below are the confirmed invited speakers for Insect Autonomy Workshop at IROS 2026. More speakers will be updated soon.
