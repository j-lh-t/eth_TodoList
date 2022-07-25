let contractABI = [
    {
        constant: false,
        inputs: [
            {
                internalType: "string",
                name: "_task",
                type: "string",
            },
        ],
        name: "addTask",
        outputs: [],
        payable: true,
        stateMutability: "payable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "uint256",
                name: "_taskIndex",
                type: "uint256",
            },
        ],
        name: "deleteTask",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [
            {
                internalType: "uint256",
                name: "_taskIndex",
                type: "uint256",
            },
        ],
        name: "getTask",
        outputs: [
            {
                components: [
                    {
                        internalType: "string",
                        name: "task",
                        type: "string",
                    },
                    {
                        internalType: "bool",
                        name: "isDone",
                        type: "bool",
                    },
                ],
                internalType: "struct Bloc.Task",
                name: "",
                type: "tuple",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "getTaskCount",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "uint256",
                name: "_taskIndex",
                type: "uint256",
            },
            {
                internalType: "bool",
                name: "_status",
                type: "bool",
            },
        ],
        name: "updateStatus",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
];

//Chỉnh theo contract Deployed on Remix IDE
let contractAddress = "0x41130598C7bbf3427e3ba48E604F19444D1D00F0";
