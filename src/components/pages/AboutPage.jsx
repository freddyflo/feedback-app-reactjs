import { Link } from 'react-router-dom'
import Card from '../shared/Card'

import React from 'react'

function AboutPage() {
    return (
        <Card>
            <div className="about">
                <h1>About this project</h1>
                <p>This is a React app to leave feedback for a product or service</p>
            </div>
            <p>Version: 1.0.0</p>

            <p>
                <Link to="/">Back to Home</Link>
            </p>
        </Card>
    )
}

export default AboutPage
