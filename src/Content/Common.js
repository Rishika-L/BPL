import Img1 from '../assets/dummy_images/1.png'
import Img2 from '../assets/dummy_images/2.png'
import Img3 from '../assets/dummy_images/3.png'
import Img4 from '../assets/dummy_images/4.png'
import Img5 from '../assets/dummy_images/5.png'
import Img6 from '../assets/dummy_images/6.png'
import Img7 from '../assets/dummy_images/7.png'
export const DEFAULT_STORE_OBJECT = {
    progressing: false,
    success: false,
    error: false,
    data: false,
    message: false,
};


export const NOTIFICATION_TYPES = {
    SUCCESS: "success",
    ERROR: "error",
    INFO:"info"
  };

export const jobData=[
    {
        jobId: "JI001",
        status_label: "Completed",
        status:1,
        orderId: "W00123",
        product: "1234ABCD",
        assemblyIns: "Frame Assembly",
        assignedBy: "Alice Johnson",
        assignedOn: "11/01/2024",
        targetQty: "10",
        startDate: "11/02/2024",
        completed: "100",
        taskList:[
            {
                id:'ts1',
                img:Img1,
                completed:true,
                activity_no:'1.1',
                activity:[
                    'Take one adaptor printer mounting ',
                    'Then take one  BRACKET PRINTER MOUNTING and insert in to the adaptor  printer mounting'
                ],
                specifications:[
                    'SPACER will be properly seated between adaptor  printer mounting and printer module',
                    
                ],
                material:[
                    '379ADPPRMOUNMLD-V - 1EA',
                    '379BKMECH -1EA'
                ],
                tools:[
                    'Digital Multimeter (IMT - DM0235)',
                    'Voltmeter (IMT - VM0236)'
                ]
            },
            {
                id:'ts2',
                img:Img2,
                activity_no:'1.2',
                completed:false,
                activity:[
                    'Take one adaptor printer mounting ',
                    'Then take one  BRACKET PRINTER MOUNTING and insert in to the adaptor  printer mounting'
                ],
                specifications:[
                    'SPACER will be properly seated between adaptor  printer mounting and printer module',
                    
                ],
                material:[
                    '379ADPPRMOUNMLD-V - 1EA',
                    '379BKMECH -1EA'
                ],
                tools:[
                    'Digital Multimeter (IMT - DM0235)',
                    'Voltmeter (IMT - VM0236)'
                ]
            },
            {
                id:'ts2',
                img:Img3,
                completed:false,
                activity_no:'1.3',

                activity:[
                    'Take one adaptor printer mounting ',
                    'Then take one  BRACKET PRINTER MOUNTING and insert in to the adaptor  printer mounting'
                ],
                specifications:[
                    'SPACER will be properly seated between adaptor  printer mounting and printer module',
                    
                ],
                material:[
                    '379ADPPRMOUNMLD-V - 1EA',
                    '379BKMECH -1EA'
                ],
                tools:[
                    'Digital Multimeter (IMT - DM0235)',
                    'Voltmeter (IMT - VM0236)'
                ]
            }

        ]
    },
    {
        jobId: "JI002",
        status_label: "In Progress",

        status:2,
        orderId: "W00456",
        product: "5678EFGH",
        assemblyIns: "Cover Assembly",
        assignedBy: "Bob Williams",
        assignedOn: "11/03/2024",
        targetQty: "120",
        startDate: "11/04/2024",
        completed: "90"
    },
    {
        jobId: "JI003",
        status_label: "Yet to Start",
        status:3,
        orderId: "W00789",
        product: "9101IJKL",
        assemblyIns: "Door Assembly",
        assignedBy: "Catherine Taylor",
        assignedOn: "11/06/2024",
        targetQty: "150",
        startDate: "11/08/2024",
        completed: "0"
    },
    {
        jobId: "JI004",
        status_label: "Completed",
        status:1,
        orderId: "W01011",
        product: "1415MNOP",
        assemblyIns: "Base Assembly",
        assignedBy: "Daniel Moore",
        assignedOn: "11/07/2024",
        targetQty: "200",
        startDate: "11/09/2024",
        completed: "200"
    },
    {
        jobId: "JI005",
        status_label: "On Hold",
        status:0,
        orderId: "W01234",
        product: "1617QRST",
        assemblyIns: "Panel Assembly",
        assignedBy: "Eve Clark",
        assignedOn: "11/10/2024",
        targetQty: "75",
        startDate: "11/11/2024",
        completed: "30"
    },
    {
        jobId: "JI006",
        status_label: "Completed",
        status:1,
        orderId: "W01567",
        product: "1819UVWX",
        assemblyIns: "Handle Assembly",
        assignedBy: "Frank Adams",
        assignedOn: "11/12/2024",
        targetQty: "180",
        startDate: "11/13/2024",
        completed: "180"
    },
    {
        jobId: "JI007",
        status_label: "Yet to Start",
        status:3,
        orderId: "W01890",
        product: "2021YZAB",
        assemblyIns: "Wheel Assembly",
        assignedBy: "Grace Johnson",
        assignedOn: "11/14/2024",
        targetQty: "90",
        startDate: "11/15/2024",
        completed: "0"
    },
    {
        jobId: "JI008",
        status_label: "In Progress",
        status:2,
        orderId: "W02123",
        product: "2223CDEF",
        assemblyIns: "Axle Assembly",
        assignedBy: "Henry Thomas",
        assignedOn: "11/16/2024",
        targetQty: "110",
        startDate: "11/17/2024",
        completed: "60"
    },
    {
        jobId: "JI009",
        status_label: "Completed",
        status:1,
        orderId: "W02456",
        product: "2425GHIJ",
        assemblyIns: "Top Enclosure Assembly",
        assignedBy: "Irene Davis",
        assignedOn: "11/18/2024",
        targetQty: "130",
        startDate: "11/19/2024",
        completed: "130"
    },
    {
        jobId: "JI010",
        status_label: "Yet to Start",
        status:3,
        orderId: "W02789",
        product: "2627KLMN",
        assemblyIns: "Seat Assembly",
        assignedBy: "Jack Wilson",
        assignedOn: "11/20/2024",
        targetQty: "160",
        startDate: "11/21/2024",
        completed: "0"
    },
    {
        jobId: "JI011",
        status_label: "On Hold",
        status:0,
        orderId: "W03012",
        product: "2829OPQR",
        assemblyIns: "Side Panel Assembly",
        assignedBy: "Karen Martin",
        assignedOn: "11/22/2024",
        targetQty: "100",
        startDate: "11/23/2024",
        completed: "45"
    },
    {
        jobId: "JI012",
        status_label: "In Progress",
        status:2,
        orderId: "W03345",
        product: "3031STUV",
        assemblyIns: "Chassis Assembly",
        assignedBy: "Liam Scott",
        assignedOn: "11/24/2024",
        targetQty: "95",
        startDate: "11/25/2024",
        completed: "70"
    },
    {
        jobId: "JI013",
        status_label: "Yet to Start",
        status:3,
        orderId: "W03678",
        product: "3233WXYZ",
        assemblyIns: "Rear Panel Assembly",
        assignedBy: "Mia Lewis",
        assignedOn: "11/26/2024",
        targetQty: "140",
        startDate: "11/27/2024",
        completed: "0"
    },
    {
        jobId: "JI014",
        status_label: "Completed",
        status:1,
        orderId: "W04001",
        product: "3435ABCD",
        assemblyIns: "Main Body Assembly",
        assignedBy: "Nathan Perez",
        assignedOn: "11/28/2024",
        targetQty: "200",
        startDate: "11/29/2024",
        completed: "200"
    },
    {
        jobId: "JI015",
        status_label: "In Progress",
        status:2,
        orderId: "W04345",
        product: "3637EFGH",
        assemblyIns: "Front Panel Assembly",
        assignedBy: "Olivia Walker",
        assignedOn: "11/30/2024",
        targetQty: "90",
        startDate: "12/01/2024",
        completed: "40"
    },
    {
        jobId: "JI016",
        status_label: "Completed",
        status:1,
        orderId: "W04678",
        product: "3839IJKL",
        assemblyIns: "Backrest Assembly",
        assignedBy: "Paul Young",
        assignedOn: "12/02/2024",
        targetQty: "150",
        startDate: "12/03/2024",
        completed: "150"
    },
    {
        jobId: "JI017",
        status_label: "Yet to Start",
        status:3,
        orderId: "W05001",
        product: "4041MNOP",
        assemblyIns: "Bracket Assembly",
        assignedBy: "Quinn Hall",
        assignedOn: "12/04/2024",
        targetQty: "80",
        startDate: "12/05/2024",
        completed: "0"
    },
    {
        jobId: "JI018",
        status_label: "In Progress",
        status:2,
        orderId: "W05345",
        product: "4243QRST",
        assemblyIns: "Hood Assembly",
        assignedBy: "Rachel Hill",
        assignedOn: "12/06/2024",
        targetQty: "120",
        startDate: "12/07/2024",
        completed: "65"
    },
    {
        jobId: "JI019",
        status_label: "Completed",
        status:1,
        orderId: "W05678",
        product: "4445UVWX",
        assemblyIns: "Bumper Assembly",
        assignedBy: "Samuel Carter",
        assignedOn: "12/08/2024",
        targetQty: "130",
        startDate: "12/09/2024",
        completed: "130"
    },
    {
        jobId: "JI020",
        status_label: "Yet to Start",
        status:3,
        orderId: "W06001",
        product: "4647YZAB",
        assemblyIns: "Grill Assembly",
        assignedBy: "Tina Ramirez",
        assignedOn: "12/10/2024",
        targetQty: "140",
        startDate: "12/11/2024",
        completed: "0"
    }
]


  
