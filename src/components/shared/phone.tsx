import React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface MyDivProps extends React.HTMLAttributes<HTMLDivElement> {
    // You can add your custom props here if needed
    SrcImg: string;
    className?: string;
}


const Phone = ({ SrcImg, className, ...props }: MyDivProps) => {

    return (
        <div className={cn("relative pointer-events-none select-none z-[8] overflow-hidden w-64 rounded-[36px]", className)} {...props}>
            <Image
                width={0}
                height={0}
                src={'/gold.png'}
                className='pointer-events-none z-[8] select-none min-w-full min-h-full overflow-hidden rounded-[36px]'
                quality={90}
                priority
                placeholder='empty'
                unoptimized={true}
                alt='image template'
            />
            <div className="absolute -z-[6] inset-0 overflow-hidden rounded-[55px]">
                {/* <Image
                    width={0}
                    height={0}
                    src={SrcImg}
                    className='object-cover min-w-[98%] min-h-[98%] overflow-hidden pointer-events-none select-none m-auto'
                    quality={90}
                    priority
                    alt={"your-images"}
                    unoptimized={true}
                /> */}

                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d241857.65162208056!2d73.50769987282801!3d18.70766275673337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x3be801098bdf8145%3A0x696b4a60a5e28658!2sLonavala%2C%20Maharashtra!3m2!1d18.7557237!2d73.4090757!4m5!1s0x3bc2c794a665032f%3A0x21efb62289226ef8!2sThe%20Riverfront%20Resort%20%26%20Camping%2C%20Solu%2C%20Alandi-Markal%20Rd%2C%20behind%20Dosti%20hotel%2C%20Pimpri-Chinchwad%2C%20Maharashtra%20412105!3m2!1d18.6621506!2d73.93579!5e0!3m2!1sen!2sin!4v1734603457191!5m2!1sen!2sin"
                    loading="lazy"
                    className="object-cover min-w-[80%] min-h-[98%] overflow-hidden m-auto"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>


            </div>
        </div>
    )
}

export default Phone