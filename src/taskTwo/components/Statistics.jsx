import PropTypes from 'prop-types';
import { StatItem } from "taskTwo/components/StatItem";
import { StatContainer, StatTitle, StatList } from "./Statistics.styled";

export function Statistics({ title, stats }) {

    return (<StatContainer countItem={stats.length}>
        {title && (<StatTitle>{title.toUpperCase()}</StatTitle>)}

        <StatList>
            {stats.map(({id, label, percentage}) => (
                <StatItem label={label} percentage={percentage} key={id} />
            ))}
        </StatList>
    </StatContainer>);
}
Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.object).isRequired,
};