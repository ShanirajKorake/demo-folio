import React from 'react'
import FolioInfoSec1 from './FolioInfoSec1'
import FolioInfoSec2 from './FolioInfoSec2'
const FolioInfo = () => {
    return (
        <div className='h-full w-full overflow-y-scroll   no-scrollbar'>
            <FolioInfoSec1 />
            <FolioInfoSec2 />
        </div>
    )
}

export default FolioInfo