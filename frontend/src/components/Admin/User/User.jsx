import './User.scss';

export const User = ({Profile,Name,Status}) => {

    const loadingContent = (
        <div className='User Container-List'>
            {[...Array(5)].map((_, index) => (
                <div key={index} className='User-Card Flex-Center Flex-Column Loading'>
                    <div className='Flex-Center'>
                        <img src={Profile} alt={Name} className='Circle'/>
                    </div>
                    <div className='Flex-Center'>
                        <p>{Name}</p>
                    </div>
                </div>
            ))}
        </div>
    );

    if (Status === 'loading') {
        return loadingContent;
    }
    
    return (
        <>
            <div className='User'>
                <div className='User-Card Flex-Center Flex-Column'>
                    <div className='Flex-Center'>
                        <img src={Profile} alt={Name} className='Circle'/>
                    </div>
                    <div className='Flex-Center'>
                        <p>{Name}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

