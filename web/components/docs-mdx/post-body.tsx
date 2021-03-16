import styled from '@emotion/styled';

export default function PostBody({ content }) {
  return (
    <div className="max-w-2xl mx-auto">
      <MarkdownView
        // className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}


const MarkdownView = styled.div`
  h1 {
      font-size: 64px;
      font-weight: bold;
      color: #000000;
  } 

  h2 {
    font-size: 48px;
    font-weight: bold;
      color: #000000;
  }

  h3 {
    font-size: 36px;
    font-weight: bold;
      color: #000000;
  }

  p {
    font-size: 16px;
    color: #686868;
  }

  code {
    background: #1D1F21;
    color: white;
    border-radius: 4px;
;
  }

  li {
    font-size: 16px;
    color: #686868;
    padding-bottom: 1.5rem;
  }
`;

