```javascript
import React, { Component } from 'react';

class ContentComponent extends Component {
    render() {
        return (
            <div>
                <h1>Eco-Friendly Content</h1>
                {this.props.contents.map((content, index) => (
                    <div key={index}>
                        <h2>{content.title}</h2>
                        <p>Type: {content.type}</p>
                        <p>Topic: {content.topic}</p>
                        <p>Description: {content.description}</p>
                        <a href={content.link}>Learn More</a>
                        <hr />
                    </div>
                ))}
            </div>
        );
    }
}

export default ContentComponent;
```

