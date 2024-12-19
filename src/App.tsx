import Background from "./components/Background";
import Navigator from "./components/Navigator";

import "./App.css";

function App() {
    return (
        <main className="dark text-foreground bg-background">
            <Navigator />
            <Background
                input={{
                    landscape: {
                        src: "https://fastcdn.hoyoverse.com/content-v2/hkrpg/101831/f54aaca7603e2c81de7f59f2ba27ace5_1530189916137544025.mp4",
                        poster: "https://fastcdn.hoyoverse.com/content-v2/hkrpg/101831/f54aaca7603e2c81de7f59f2ba27ace5_1530189916137544025.mp4?x-oss-process=video/snapshot,t_1,f_jpg,m_fast",
                    },
                    portrait: {
                        src: "https://fastcdn.hoyoverse.com/content-v2/hkrpg/101831/8150ed7bf869ad11a7c68a8646a850cb_416164607738221361.mp4",
                        poster: "https://fastcdn.hoyoverse.com/content-v2/hkrpg/101831/8150ed7bf869ad11a7c68a8646a850cb_416164607738221361.mp4?x-oss-process=video/snapshot,t_1,f_jpg,m_fast",
                    },
                }}
            />
        </main>
    );
}

export default App;
