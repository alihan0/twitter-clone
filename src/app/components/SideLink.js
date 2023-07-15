import React from 'react'

const SideLink = ({name, Icon, className, active, onMenuItemClick}) => {
    const isActive = active === name;
  return (
    <li className='group' onClick={() => onMenuItemClick(name)}>
        <a href={name.toLowerCase()} className='cursor-pointer pointer-events-none block text-lg mb-2'>
            <div className='inline-block '>
                <div className={`flex items-center rounded-full pl-3 pr-8 py-3 group-hover:bg-primary-light group-hover:text-primary-base
                ${isActive ? 'text-primary-base':''}
                `}>
                    <Icon className={className} />
                    <span className='ml-4 font-bold'>{name}</span>
                </div>
            </div>
        </a>
    </li>
  )
}

export default SideLink
