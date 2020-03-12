const _users = [
    {
      "address": {
        "city": "Los Angeles",
        "state": 'california',
        "poncode": "123"
      },
      "tags": [
        "music",
        "blogs",
        "cricket"
      ],
      "name": "Tom Benzamin"
    },
    {
      "address": {
        "city": "抚州",
        "state": '江西',
        "poncode": "33100"
      },
      "tags": [
        "coding",
        "blogs"
      ],
      "name": "肖仡轩"
    },
    {
      "address": {
        "city": "九江",
        "state": '江西',
        "poncode": "33100"
      },
      "tags": [
        "coding",
        "blogs"
      ],
      "name": "刘子民"
    },
    {
      "address": {
        "city": "赣州",
        "state": '江西',
        "poncode": "33100"
      },
      "tags": [
        "coding",
        "games"
      ],
      "name": "衷从海"
    }
  ]
export default{
  fetchUsers(cb){
    setTimeout(() => {
      cb(_users)
    },1000)
  }
}