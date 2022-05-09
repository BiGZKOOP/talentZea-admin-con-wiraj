import Avatar from "../../@core/components/avatar"

export const time_linedata = [
    {
        title: 'User login',
        content: 'User login at 2:12pm',
        meta: '12 mins ago'
    },
    {
        title: 'Meeting with john',
        content: 'React Project meeting with john @10:15am',
        meta: '45 mins ago',
        color: 'warning',
        customContent: (
            <div className='d-flex align-items-center mb-50'>
                <Avatar img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUeriYGQjOOecu23m2gqPoc1_Dz5Phrr4uKWwNMnwyQxUYDgCUqOHiwv0Jph1MU5Kzf0g&usqp=CAU" imgHeight={38} imgWidth={38} />
                <div className='ms-50'>
                    <h6 className='mb-0'>Leona Watkins (Client)</h6>
                    <span>CEO of Pixinvent</span>
                </div>
            </div>
        )
    },
    {
        title: 'Create a new react project for client',
        content: 'Add files to new design folder',
        meta: '2 days ago',
        color: 'info'
    }
    // {
    //   title: 'Create Invoices for client',
    //   content: 'Create new Invoices and send to Leona Watkins',
    //   meta: '12 mins ago',
    //   color: 'danger',
    //   customContent: (
    //     <div className='d-flex align-items-center'>
    //       <img className='me-1' src={pdf} alt='pdf' height='23' />
    //       <h6 className='mb-0'>invoice.pdf</h6>
    //     </div>
    //   )
    // }
]