bjorklund
=========

### Overview

A super quick implementation of [Bjorklund's algorithm](https://ics-web.sns.ornl.gov/timing/Rep-Rate%20Tech%20Note.pdf).

### Usage

Exposes a single function, generate, that evenly distributes pulses over steps.

Parameters: 

* Number: pulses - number of pulses
* Number: steps - number of steps

Returns:

* Array

<code>
    var pulses = 5,
	  steps = 8;
    console.log(bjorklund.generate(pulses, steps));
    // returns [ 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0 ]
</code>
