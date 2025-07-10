'use client'

import classNames from 'classnames'
import React from 'react'
import ReactSlider from 'react-slider'

type Props = {
    min: number
    max: number
    step?: number
    value: [number, number]
    onChange: (value: [number, number]) => void
    label?: string
    unit?: string
    className?: string;
    locale?: string
}

export default function RangeSlider({
    min,
    max,
    step = 1,
    value,
    onChange,
    label = '',
    unit = '',
    className = '',
    locale = 'fa-IR',

}: Props) {

    const formatNumber = (num: number) =>
        new Intl.NumberFormat(locale).format(num)

    return (
        <div className={classNames('w-full', className)}>
            {label && <p className="mb-2 text-sm font-medium">{label}</p>}
            <div className="mb-2 flex justify-between text-sm text-gray-600 font-bold">
                <span>{unit} {formatNumber(value[0])}</span>
                <span>{unit} {formatNumber(value[1])}</span>
            </div>

            <ReactSlider
                className="h-2 relative"
                thumbClassName="h-4 w-4 -translate-y-1 rounded bg-white cursor-grab active:cursor-grabbing shadow-lg active:ring-orange-500 active:ring-5 ring-1 ring-gray-200"
                renderTrack={(props, state) => {
                    const isActiveRange =
                        state.index === 1
                    return (
                        <div
                            {...props}
                            className={classNames(
                                'h-2 rounded',
                                isActiveRange ? 'bg-orange-500' : 'bg-gray-200'
                            )}
                        />
                    )
                }}
                min={min}
                max={max}
                step={step}
                value={value}
                onChange={onChange}
                ariaLabel={['Lower thumb', 'Upper thumb']}
                pearling
                minDistance={1}
            />

        </div>
    )
}
