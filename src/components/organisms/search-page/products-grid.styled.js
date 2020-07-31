import styled from 'styled-components';

export const Grid = styled.div`
  ${(props) => props.theme.mixins.gridDivideIntoColumns(5)}
  grid-template-rows: repeat(3, auto);
  grid-auto-rows: 0;
  overflow-y: hidden;
  /* How to hide implicit css-grid rows: https://stackoverflow.com/a/49100132/9787887 */

  ${(props) => props.theme.media.lessThan('huge')`
    --no-columns: 4;
  `}
  ${(props) => props.theme.media.lessThan('large')`
    --no-columns: 3;
  `}
  ${(props) => props.theme.media.lessThan('smedium')`
    --no-columns: 2;
  `}
`;

export const Paginate = styled.div`
  .pagination {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1em 30% 2em;
    user-select: none;
    font-size: 1.3em;
  }

  ion-icon {
    font-size: 1.5em;
    margin-top: 0.1rem;
  }

  li:not(.selected) {
    &.disabled {
      color: ${(props) => props.theme.colors.greyLight2};
    }

    &:not(.disabled) {
      ${(props) => props.theme.mixins.hoverColorPrimary}
    }
  }

  .selected {
    font-weight: ${(props) => props.theme.fw.bold};

    border-bottom: 2px solid currentColor;
  }
`;

export const NoProduct = styled.div`
  ${(props) => props.theme.mixins.flexCenter}
  font-size: 1.5em;
  height: 50vh;
  grid-column: 1/-1;
  grid-row: 1/-1;
  position: sticky;
  top: 100px;

  > :last-child {
    &:not(:hover) {
      color: ${(props) => props.theme.colors.red};
    }

    margin-left: 1rem;
  }
`;
