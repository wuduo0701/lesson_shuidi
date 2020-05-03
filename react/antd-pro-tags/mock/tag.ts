import { Request, Response } from 'express';
const getTags = (req: Request, res: Response) => {
  // console.log(req, res)
  res.json({
    data: [
      {
        id: 1,
        title: 'vue'
      },
      {
        id: 2,
        title: 'react'
      },
      {
        id: 1,
        title: 'antd'
      },
      {
        id: 1,
        title: 'element-ui'
      }
    ]
  })
}

export default {
 'GET /api/tag/all': getTags
}