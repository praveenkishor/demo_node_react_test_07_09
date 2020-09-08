# demo_node_react_test_07_09
create a sample code for an organization

# There are two folder backend and frontend backend for nodejs and frontend for reactjs

# Db details
CREATE TABLE `coingecko` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `img` varchar(256) NOT NULL,
  `price` float NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


INSERT INTO `coingecko` (`id`, `name`, `img`, `price`, `created`) VALUES
(5, 'Bitcoin', 'https://assets.coingecko.com/coins/images/1/thumb/bitcoin.png?', 37361, '2020-09-07 18:30:00'),
(6, 'Ethereum', 'https://assets.coingecko.com/coins/images/279/thumb/ethereum.png?1595348880', 1265.73, '2020-09-08 02:51:42'),
(7, 'Tether', 'https://assets.coingecko.com/coins/images/325/thumb/Tether-logo.png?1598003707', 74.27, '2020-09-08 04:00:59'),
(8, 'XRP', 'https://assets.coingecko.com/coins/images/44/thumb/xrp.png?1564480400', 17.66, '2020-09-08 04:01:59'),
(9, 'Chainlink', 'https://assets.coingecko.com/coins/images/877/thumb/chainlink-new-logo.png?1547034700', 918.3, '2020-09-08 04:03:30'),
(10, 'Bitcoin Cash', 'https://assets.coingecko.com/coins/images/780/thumb/bitcoin-cash-circle.png?1594689492', 16742.1, '2020-09-08 04:03:30'),
(11, 'Polkadot', 'https://assets.coingecko.com/coins/images/12171/thumb/aJGBjJFU_400x400.jpg?1597804776', 329.11, '2020-09-08 04:05:03'),
(12, 'Binance Coin', 'https://assets.coingecko.com/coins/images/825/thumb/binance-coin-logo.png?1547034615', 1642.44, '2020-09-08 04:05:03');

# This is simple flow of data from node to react. If you want to more feature then I can add more


