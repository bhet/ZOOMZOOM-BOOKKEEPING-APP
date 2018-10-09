import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import {flatten, times, range} from 'lodash';

const Sidebar = () => {
  const number_paragraph = 15;
  const paragraphs = flatten(times(number_paragraph, (idx) => (<p key={idx}>
    Lorem Ipsum is simply dummy text of the printing
    and typesetting industry. Lorem Ipsum has been
    the industry's standard dummy text ever since the
    1500s, when an unknown printer took a galley of type
    and scrambled it to make a type specimen book.
    It has survived not only five centuries, but also
    the leap into electronic typesetting, remaining
    essentially unchanged. It was popularised in the 1960s
    with the release of Letraset sheets containing Lorem
    Ipsum passages, and more recently with desktop publishing
    software like Aldus PageMaker including versions of Lorem Ipsum.</p>)));
  return (<div>
    <Grid>
      <Row className="show-grid">
        <Col xs={6} md={4}>
          <code>{'<Col xs={6} md={4} />'}</code>
        </Col>
        <Col xs={12} md={8}>
          {paragraphs.map(paragraph => paragraph)}
        </Col>

      </Row>

    </Grid>;

  </div>)
}

export default Sidebar;
