import PropTypes from 'prop-types';
import { RowBody } from "./TransactionRow.styled"
import { ucFirst } from "utilities"

export function TransactionRow({ type, amount, currency, index }) {
    return (
        <RowBody index={index}>
            <td>{ucFirst(type)}</td>
            <td>{amount}</td>
            <td>{currency}</td>
        </RowBody>
    );
}

TransactionRow.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired
};