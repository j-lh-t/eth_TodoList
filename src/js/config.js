let contractABI = [
    {
        inputs: [
            {
                internalType: "string",
                name: "_name",
                type: "string",
            },
        ],
        name: "addTask",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_taskIndex",
                type: "uint256",
            },
        ],
        name: "deleteTask",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
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
                        name: "name",
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
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "taskCount",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
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
        stateMutability: "nonpayable",
        type: "function",
    },
];

//Chỉnh theo contract Deployed on Remix IDE
let contractAddress = "0xe6c56d309F769941890dF6aBA22C1b69FD4639A8";
