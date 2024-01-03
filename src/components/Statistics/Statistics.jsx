import Container from 'components/Container/Container';
import StatisticsItem from 'components/StatisticsItem/StatisticsItem';
import {
  StyledStatisticsData,
  StyledStatisticsTitle,
} from './Statistics.styled';

const Statistics = ({ title, stats }) => {
  return (
    <Container>
      {title && <StyledStatisticsTitle>{title}</StyledStatisticsTitle>}

      <StyledStatisticsData>
        {stats.map(item => (
          <StatisticsItem key={item.id} {...item} />
        ))}
      </StyledStatisticsData>
    </Container>
  );
};

export default Statistics;
