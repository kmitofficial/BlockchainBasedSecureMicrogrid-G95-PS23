// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Microgrid {
    uint256 public perUnit = 4334633723450368;
    uint public microGridId = 0;

    struct Prosumer {
        string name;
        // uint wallet1;
        // uint energyBalance;
        uint uinqueID;
        bool isProsumer;
    }

    struct Consumer {
        string name;
        string micrometerid;
        uint energyBalance;
        uint wallet;
    }

    struct Producer {
        string name;
        uint uniqueID;
        bool isProducer;
    }

    struct Battery {
        uint uniqueID;
        uint minCapacity;
        uint maxCapacity;
        uint Charge;
        uint16 maxEfficiency;
        uint16 initSoc;
    }

    struct Load {
        uint loadId;
        address userAddress;
        uint energyRequired;
    }

    struct GreenEnergy {
        uint uniqueID;
        uint charge;
        uint energyProduction;
    }

    struct Grid {
        uint uniqueID;
        uint charge;
        uint maxImport;
        uint maxExport;
    }
    struct Transaction {
        address from;
        address to;
        uint256 amount;
        uint256 timestamp;
    }

    struct MicroGrid {
        string microGridName;
        uint uniqueId;
        Battery[] batteryUsing;
        Load[] loads;
        GreenEnergy[] greenEnergies;
        Grid[] powerGrid;
        address[] Prosumers;
        address[] Consumers;
        address[] Producers;
    }

    mapping(uint => MicroGrid) public microGrids;
    mapping(address => Prosumer) public address_Prosumer;
    mapping(address => Consumer) public address_Consumer;
    mapping(address => Producer) public address_Producer;

    event microgridDetails(
        string name,
        Battery[] batteryUsing,
        Load[] loads,
        GreenEnergy[] greenEnergies,
        Grid[] powerGrid
    );
    event EnergyTransferred(
        address indexed from,
        address indexed to,
        uint256 transferAmount
    );
    event microGridAdded(uint uniqueId);
    event addLoadData(uint microGridUniqueId, uint loadId, uint energyRequired);
    event addBatteryData(
        uint microGridUniqueId,
        uint batteryIndex,
        uint minCapacity,
        uint maxCapacity,
        uint Charge,
        uint16 maxEfficiency,
        uint16 initSoc
    );
    event addGreenEnergyData(
        uint microGridUniqueId,
        uint GEId,
        uint charge,
        uint energyProduction
    );
    event addGridData(
        uint microGridUniqueId,
        uint gridIndex,
        uint charge,
        uint maxImport,
        uint maxExport
    );

    function createMicroGrid(string memory name) public {
        require(
            address_Producer[msg.sender].isProducer == true,
            "Only Producers can access this feature."
        );
        MicroGrid storage tempMicroGrid = microGrids[microGridId];
        tempMicroGrid.microGridName = name;
        tempMicroGrid.uniqueId = microGridId;
        microGridId += 1;
        emit microGridAdded(tempMicroGrid.uniqueId);
    }

    function viewMicrogridDetails(uint id) public {
        require(
            address_Producer[msg.sender].isProducer == true,
            "Only Producers can access this feature."
        );
        MicroGrid storage temp = microGrids[id];
        emit microgridDetails(
            temp.microGridName,
            temp.batteryUsing,
            temp.loads,
            temp.greenEnergies,
            temp.powerGrid
        );
    }

    function addBattery(
        uint uniqueId,
        uint minCapacity,
        uint maxCapacity,
        uint Charge,
        uint16 maxEfficiency,
        uint16 initSoc
    ) public {
        require(
            address_Producer[msg.sender].isProducer == true,
            "Only Producers can access this feature."
        );
        MicroGrid storage tempMicroGrid = microGrids[uniqueId];
        uint batteryId = tempMicroGrid.batteryUsing.length;
        tempMicroGrid.batteryUsing.push(
            Battery(
                batteryId,
                minCapacity,
                maxCapacity,
                Charge,
                maxEfficiency,
                initSoc
            )
        );
        emit addBatteryData(
            uniqueId,
            batteryId,
            minCapacity,
            maxCapacity,
            Charge,
            maxEfficiency,
            initSoc
        );
    }

    function addLoad(
        address userAddress,
        uint energyRequired,
        uint uniqueId
    ) public {
        require(
            address_Producer[msg.sender].isProducer == true,
            "Only Producers can access this feature."
        );
        MicroGrid storage tempMicroGrid = microGrids[uniqueId];
        uint loadId = tempMicroGrid.loads.length;
        Load memory loadItem = Load(loadId, userAddress, energyRequired);
        tempMicroGrid.loads.push(loadItem);
        emit addLoadData(uniqueId, loadId, energyRequired);
    }

    function addGreenEnergy(
        uint uniqueId,
        uint charge,
        uint energyProduction
    ) public {
        require(
            address_Producer[msg.sender].isProducer == true,
            "Only Producers can access this feature."
        );
        MicroGrid storage tempMicroGrid = microGrids[uniqueId];
        uint greenEnergyId = tempMicroGrid.greenEnergies.length;
        tempMicroGrid.greenEnergies.push(
            GreenEnergy(greenEnergyId, charge, energyProduction)
        );
        emit addGreenEnergyData(
            uniqueId,
            greenEnergyId,
            charge,
            energyProduction
        );
    }

    function addPowerGrid(
        uint uniqueId,
        uint charge,
        uint maxImport,
        uint maxExport
    ) public {
        require(
            address_Producer[msg.sender].isProducer == true,
            "Only Producers can access this feature."
        );
        MicroGrid storage tempMicroGrid = microGrids[uniqueId];
        uint gridId = tempMicroGrid.powerGrid.length;
        tempMicroGrid.powerGrid.push(
            Grid(gridId, charge, maxImport, maxExport)
        );
        emit addGridData(uniqueId, gridId, charge, maxImport, maxExport);
    }

    function addProducer(string memory name, uint uniqueID) public {
        Producer memory producer = Producer(name, uniqueID, true);
        address_Producer[msg.sender] = producer;
    }

    function addAnotherProducer(
        string memory name,
        uint uniqueID,
        address producerAddress
    ) public {
        Producer memory producer = Producer(name, uniqueID, true);
        address_Producer[producerAddress] = producer;
    }

    function addProsumer(string memory name, uint uniqueID) public {
        Prosumer memory prosumer = Prosumer(name, uniqueID, true);
        address_Prosumer[msg.sender] = prosumer;
    }

    function addAnotherProsumer(
        string memory name,
        uint uniqueID,
        address prosumerAddress
    ) public {
        Prosumer memory prosumer = Prosumer(name, uniqueID, true);
        address_Prosumer[prosumerAddress] = prosumer;
    }

    function addProducerToMicroGrid(uint uniqueId, address producer) public {
        require(
            address_Producer[producer].isProducer,
            "you are not a producer"
        );
        microGrids[uniqueId].Producers.push(producer);
    }

    function addConsumerToMicroGrid(uint uniqueId, address producer) public {
        // require(address_Producer[msg.sender].isProducer,"you are not a producer");
        microGrids[uniqueId].Consumers.push(producer);
    }

    function addProsumerToMicroGrid(uint uniqueId, address prosumer) public {
        require(
            address_Prosumer[prosumer].isProsumer,
            "you are not a prosumer"
        );
        microGrids[uniqueId].Prosumers.push(prosumer);
    }

    function showAllProducers(
        uint uniqueId
    ) public view returns (address[] memory) {
        return microGrids[uniqueId].Producers;
    }

    function showAllProsumer(
        uint uniqueId
    ) public view returns (address[] memory) {
        return microGrids[uniqueId].Prosumers;
    }

    function addConsumer(
        string memory name,
        string memory micrometerid,
        uint energyBalance
    ) public {
        uint wallet = msg.sender.balance / 1 ether;
        Consumer memory consumer = Consumer(
            name,
            micrometerid,
            energyBalance,
            wallet
        );
        address_Consumer[msg.sender] = consumer;
    }

    // Function to purchase energy  consumer -> prosumer

    //     function purchaseEnergy_to_Producer(address payable producer) public payable  {
    //         require(address_Producer[producer].isProducer, "Invalid producer address");
    //         require(msg.value <=msg.sender.balance, "Incorrect Ether value provided");

    //         uint energyUnits = msg.value/perUnit;
    //         producer.transfer(msg.value);
    //         address_Consumer[msg.sender].energyBalance += energyUnits;
    //         emit EnergyTransferred(msg.sender, producer, energyUnits);

    //     }

    //     function purchaseEnergy_to_Prosumer(address payable prosumerAddress, address payable producerAddress) public payable  {
    //     require(address_Prosumer[prosumerAddress].isProsumer, "Invalid prosumer address");
    //     require(msg.value <= msg.sender.balance, "Incorrect Ether value p68rovided");

    //     uint energyUnits = msg.value / perUnit;
    //     uint producerShare = (msg.value * 10) / 100;

    //     prosumerAddress.transfer(msg.value - producerShare);
    //     producerAddress.transfer(producerShare);

    //     address_Consumer[msg.sender].energyBalance += energyUnits;

    //     emit EnergyTransferred(msg.sender, prosumerAddress, energyUnits);
    //     // emit ProducerShareTransferred(msg.sender, producerAddress, producerShare);
    // }
    function purchaseEnergy_to_Producer(
        address payable producerAddress
    ) public payable {


        uint energyUnits = msg.value / perUnit;
        uint producerShare = (msg.value * 10) / 100;

        producerAddress.transfer(producerShare);

        address_Consumer[msg.sender].energyBalance += energyUnits;

        emit EnergyTransferred(msg.sender, producerAddress, energyUnits);
    }

    function purchaseEnergy_to_Prosumer(
        address payable prosumerAddress
    ) public payable {



        uint energyUnits = msg.value / perUnit;
        uint producerShare = (msg.value * 10) / 100;

        prosumerAddress.transfer(msg.value - producerShare);

        address_Consumer[msg.sender].energyBalance += energyUnits;

        emit EnergyTransferred(msg.sender, prosumerAddress, energyUnits);
        // emit ProducerShareTransferred(msg.sender, producerAddress, producerShare);
    }

    // function Prosumer_to_Producer(address payable producer) public payable {
    //     require(address_producer[producer].isProducer,"Invalid producer address");
    //     require(address_Prosumer[msg.sender],"Invalid producer address");
    //     uint256 To_be_paid =0;

    // }

    // // Function to sell excess energy,  prosumer -> consumer
    // function sellEnergy(uint transferAmount) public {
    //     require(address_Prosumer[msg.sender].energyBalance >= transferAmount, "Insufficient energy balance");
    //     Prosumer storage prosumer = address_Prosumer[msg.sender];
    //     prosumer.energyBalance -= transferAmount;
    //     prosumer.wallet1 += transferAmount * perUnit;

    //     // Emit an event to record the energy sale
    //     emit EnergyTransferred(msg.sender, address(this), transferAmount * perUnit);
    // }

    // Function to transfer energy from one user to another
    // function transferEnergy(address to, uint transferAmount) public {
    //     require(address_Prosumer[msg.sender].energyBalance >= transferAmount, "Not enough energy to transfer");

    //     Prosumer storage senderDetails = address_Prosumer[msg.sender];
    //     Prosumer storage receiverDetails = address_Prosumer[to];

    //     senderDetails.energyBalance -= transferAmount;
    //     receiverDetails.energyBalance += transferAmount;

    //     // Emit an event to record the energy transfer
    //     emit EnergyTransferred(msg.sender, to, transferAmount);
    // }

    Transaction[] public transactions;

    event TransactionAdded(
        address indexed from,
        address indexed to,
        uint256 amount,
        uint256 timestamp
    );

    function addTransaction(
        address _from,
        address _to,
        uint256 _amount
    ) public {
        transactions.push(
            Transaction({
                from: _from,
                to: _to,
                amount: _amount,
                timestamp: block.timestamp
            })
        );

        emit TransactionAdded(_from, _to, _amount, block.timestamp);
    }

    function getTransactionCount() public view returns (uint256) {
        return transactions.length;
    }

    function getTransaction(
        uint256 index
    )
        public
        view
        returns (address from, address to, uint256 amount, uint256 timestamp)
    {
        require(index < transactions.length, "Transaction index out of bounds");
        Transaction storage transaction = transactions[index];
        return (
            transaction.from,
            transaction.to,
            transaction.amount,
            transaction.timestamp
        );
    }

    // function batteryData() public view returns (uint) {
    //     MicroGrid storage tempMicroGrid = microGrids[0];

    //     require(tempMicroGrid.batteryUsing.length > 0, "No batteries in Microgrid 0");
    //     require(tempMicroGrid.batteryUsing.length > 0, "No battery found at index 0");

    //     Battery storage battery = tempMicroGrid.batteryUsing[0];
    //     return battery.Charge;
    // }
    function consumerData() public view returns (string memory) {
        Consumer memory data = address_Consumer[msg.sender];
        return data.name;
    }

    function showMicroGridId() public view returns (uint) {
        return microGridId;
    }
}
