import { StyledStatisticsItem } from './StatisticsItem.styled';

const StatisticsItem = ({ label, percentage }) => {
  return (
    <StyledStatisticsItem>
      <span className="label">{label}</span>
      <span className="percentage">{`${percentage}%`}</span>
    </StyledStatisticsItem>
  );
};

export default StatisticsItem;
