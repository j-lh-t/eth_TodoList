//SPDX-License-Identifier: MIT
pragma solidity >=0.8.1;
pragma experimental ABIEncoderV2;

// Creating a contract
contract Bloc {
    // Defining a structure to
    // // store a task
    // struct Task {
    //     string name;
    //     bool isDone;
    //     string time;
    //     string timeDone;
    // }
    struct Task {
        string name;
        bool isDone;
    }

    mapping(address => Task[]) private Tasks;

    uint256 public taskCount = 0;

    // // Defining function to add a task
    // function addTask(string memory _name, string memory _time) public payable {
    //     taskCount += 1;
    //     Tasks[msg.sender].push(
    //         Task({name: _name, time: _time, isDone: false, timeDone: ""})
    //     );

    //     // Fetch the author
    //     address payable _author = msg.sender;
    //     // Pay the author by sending them Ether
    //     address(_author).transfer(msg.value);
    // }

    // Defining function to add a task
    function addTask(string memory _name) public payable {
        taskCount += 1;
        Tasks[msg.sender].push(Task({name: _name, isDone: false}));

        // Fetch the author
        address payable _author = payable(msg.sender);
        // Pay the author by sending them Ether
        _author.transfer(msg.value);
    }

    // Defining a function to get details of a task
    function getTask(uint256 _taskIndex) external view returns (Task memory) {
        Task storage task = Tasks[msg.sender][_taskIndex];
        return task;
    }

    // Defining a function to update status of a task
    function updateStatus(uint256 _taskIndex, bool _status) external {
        Tasks[msg.sender][_taskIndex].isDone = _status;
        //   Tasks[msg.sender][_taskIndex].timeDone = _timeDone;
    }

    // Defining a function to delete a task
    function deleteTask(uint256 _taskIndex) external {
        delete Tasks[msg.sender][_taskIndex];
    }
}
