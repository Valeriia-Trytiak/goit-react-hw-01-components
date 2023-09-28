import PropTypes from 'prop-types'; 
import css from "./TransactionItem.module.css";

export const TransactionItem = ({ typeItem, idItem, amountItem, currencyItem }) => {
    return <tr key={idItem}>
    <td>{typeItem}</td>
    <td>{amountItem}</td>
    <td>{currencyItem}</td>
  </tr>
}

TransactionItem.prototype={
    key: PropTypes.string.isRequired,
    typeItem: PropTypes.string.isRequired,
    amountItem:PropTypes.string.isRequired,
    currencyItem:PropTypes.string.isRequired,
}