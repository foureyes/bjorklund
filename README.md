bjorklund
=========

### Overview

A super quick implementation of [Bjorklund's algorithm](https://ics-web.sns.ornl.gov/timing/Rep-Rate%20Tech%20Note.pdf).

### Usage

<code>
var pulses = 5,
	steps = 8;

console.log(bjorklund.generate(pulses, steps));
// returns [ 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0 ]
</code>
