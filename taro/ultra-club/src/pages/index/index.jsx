import Taro, {  useState } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.styl'
import { PostCard, PostForm } from '../../components'

export default  function Index() {
  // hooks 第一个函数 
  // state  mutation  actions 
  // react hooks 让react 的 组件开发回到 函数的黄金时刻
  const [posts, setPosts] = useState([
    {
      title: "泰罗奥特曼",
      content: "泰罗是奥特之父和奥特之母唯一的亲生儿子。"
    }
  ]);
  // oldState  newState
  const [formTitle, setFormTitle] = useState('')
  const [formContent, setFormContent] = useState('')
  // js 函数式编程很nice 
  // statelesscomponent  component 

  function handleSubmit(e) {
    console.log(e);
    e.preventDefault();
    // console.log()
    const newPosts = posts.concat({
      title: formTitle, 
      content: formContent
    })
    setPosts(newPosts)
  }

  return (
    <View className="index">
      {
        posts.map((post) => (
          <PostCard 
            key={post.title}
            title={post.title}
            content={post.content}/>
        ))
      }
      <PostForm 
        formTitle={formTitle}
        formContent={formContent}
        handleTitleInput={e=>setFormTitle(e.target.value)}
        handleContentInput={e=>setFormContent(e.target.value)}
        handleSubmit={e=>handleSubmit(e)}
        />
    </View>
  )
}

Index.config = {
  navigationBarTitleText: "首页"
}