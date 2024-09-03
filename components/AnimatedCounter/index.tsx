'use client'

import React from 'react'
import CountUp from 'react-countup';

type AnimatedCounterProps = {
  amount: number;
}

const AnimatedCounter = ({ amount }: AnimatedCounterProps) => {
  return (
    <div className="w-full">
      <CountUp decimal="." decimals={2} duration={4} end={amount} prefix="$" />
    </div>
  )
}

export default AnimatedCounter