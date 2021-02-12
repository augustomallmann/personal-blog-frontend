import styled from 'styled-components';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

export const PostItemLink = styled(AniLink)`
  color: var(--texts);
  display: flex;
  align-items: baseline;

  text-decoration: none;

 

  &:hover {
    color: var(--textHover);
  }
`;

export const PostItemWrapper = styled.section`
  align-items: center;
  display: block;
  width: 100%;
  height: -webkit-fill-available;
  background: var(--secondaryBackground);
  border-radius: 5px;
  margin: 1rem;
  color: var(--texts);
  }
  img{
    border-radius: 5px 5px 0 0;

  }

  body#grid & {
    border: none;
    flex-direction: column;
    justify-content: center;
  }
`;

export const PostItemTag = styled.span`
  font-size: 0.9rem;
`;
export const PostDetailsWrap = styled.div`
  display:flex;
  align-items: center;
`;

export const Separator = styled.span`
  margin: 0 1rem;
`;
export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: gray;
  margin: 1rem 0;
`;
export const PostThumbnail = styled.img`
  width: 100%;
  height: 250px;
`;
export const PostItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
`;

export const PostItemDate = styled.time`
  font-size: 0.9rem;
`;

export const PostItemTitle = styled.h1`
  line-height: 1.2;
  font-size: 1.2rem;
  font-weight: 400;
`;

export const PostItemDescription = styled.p`
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.2;
`;
