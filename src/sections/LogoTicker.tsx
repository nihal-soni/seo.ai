import Image from 'next/image';

import acmeLogo from '@/assets/logo-acme.png';
import apexLogo from '@/assets/logo-apex.png';
import celestialLogo from '@/assets/logo-celestial.png'
import quantumLogo from '@/assets/logo-quantum.png'
import pulseLogo from '@/assets/logo-pulse.png'
import echoLogo from '@/assets/logo-echo.png'

const logos = [
    { src: acmeLogo, alt: 'Acme Logo' },
    { src: apexLogo, alt: 'Apex Logo' },
    { src: celestialLogo, alt: 'Celestial Logo' },
    { src: quantumLogo, alt: 'Quantum Logo' },
    { src: pulseLogo, alt: 'Pulse Logo' },
    { src: echoLogo, alt: 'Echo Logo' },
];

export const LogoTicker = () => {
    return (
        <section className='py-20 md:py-24'>
            <div className="container mx-auto">
                <div className='flex items-center justify-center gap-5'>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-5">
                        <h2 className="text-sm font-semibold whitespace-nowrap text-white">
                            Trusted by top innovative teams
                        </h2>
                        <div className="overflow-hidden w-full [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
                            <div className="flex gap-14 items-center">
                                {logos.map((logo, index) => (
                                    <Image
                                        key={index}
                                        src={logo.src}
                                        alt={logo.alt}
                                        className="h-6 w-auto"
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}