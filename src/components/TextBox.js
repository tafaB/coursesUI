import React, { useState } from 'react';

export default function CustomInput({ placeholder, type, icon }) {
    return (
        <div className="relative flex items-center py-2">
            <label class="input w-full input-bordered flex items-center gap-2">
                <img src={icon} alt="icon" class="w-6 fill-red-500" />
                <input type={type} class="grow" placeholder={placeholder} />
            </label>
        </div>
    );
}
