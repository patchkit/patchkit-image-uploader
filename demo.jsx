import React from 'react'
import ImageUploader from './index'

export default class ImageUploaderDemo extends React.Component {
  render() {
    const onChange = () => console.log('changed')
    return <div>
      <h1>patchkit-image-uploader</h1>
      <section className="image-uploader">
        <header>&lt;ImageUploader&gt;</header>
        <div className="content"><ImageUploader current="/img/pic1.jpg" onChange={onChange} /></div>
      </section>
    </div>
  }
}