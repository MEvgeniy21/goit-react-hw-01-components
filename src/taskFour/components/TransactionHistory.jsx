import PropTypes from 'prop-types';
import { Table, RowHead } from "./TransactionHistory.styled"
import { TransactionRow } from "./TransactionRow"

export function TransactionHistory({ transactions }) {
    return (
        <Table>
            <thead>
                <RowHead>
                    <th>{'Type'.toUpperCase()}</th>
                    <th>{'Amount'.toUpperCase()}</th>
                    <th>{'Currency'.toUpperCase()}</th>
                </RowHead>
            </thead>

            <tbody>
                {transactions.map(({id, type, amount, currency}, index) => (
                    <TransactionRow type={type} amount={amount} currency={currency} index={index} key={id} />
                ))}
            </tbody>
        </Table>
    );
}

TransactionHistory.propTypes = {
    transactions: PropTypes.arrayOf(PropTypes.object).isRequired,
};