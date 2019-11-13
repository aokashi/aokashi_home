import React from 'react'
import PropTypes from 'prop-types'

import MaterialBox from './MaterialBox'

const PieceMaterialBox = ({ materialItem }) => {
  let notes = []

  return (
    <MaterialBox
      width="half"
      title={materialItem.name}
      materialItem={materialItem}
    >
      <div className="block">
        {
          materialItem.files.map((file, fileIndex) => {
            let noteSign = ''
            if (file.note) {
              notes.push(file.note)
              noteSign = <sup>{notes.length}</sup>
            }
            return (
              <span key={fileIndex}>
                <a download={file.path} href={file.path}>
                  <img src={file.path} alt={file.alt} />
                </a>
                {noteSign}
              </span>
            )
          })
        }
        <ol>
          {
            notes.map((noteItem, noteIndex) => (
              <li key={noteIndex}>{noteItem}</li>
            ))
          }
        </ol>
        {
          materialItem.downloadFile &&
            <div className="buttons is-right">
              <a href={materialItem.downloadFile} className="button">ダウンロード</a>
            </div>
        }
      </div>
    </MaterialBox>
  )
}

PieceMaterialBox.propTypes = {
  materialItem: PropTypes.shape({
    name: PropTypes.string.isRequired,
    files: PropTypes.arrayOf(PropTypes.shape({
      path: PropTypes.string.isRequired,
      alt: PropTypes.string,
      note: PropTypes.note,
    })),
    downloadFile: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    descrption: PropTypes.string,
  })
}

export default PieceMaterialBox
