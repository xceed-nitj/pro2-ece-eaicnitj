import React from "react";
import { PhoneIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";

const TopNavInfo = ({ className, icon, value }) => {
    return (
        <div className={
            clsx(
                "flex items-center gap-x-2 text-accent-700 hover:text-accent-900",
                className
            )
        }>
            <dt className="flex-none">
                {icon}
            </dt>
            <dd>
                <a className="text-xs" href={
                    icon === <PhoneIcon className="w-3 h-3" />
                        ? `tel:${value}`
                        : `mailto:${value}`
                }>
                    {value}
                </a>
            </dd>
        </div>
    );
};

export default TopNavInfo;