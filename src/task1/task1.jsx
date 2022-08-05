import { Profile } from "task1/components/Profile";
import user from "task1/user.json"
import { Box } from "common/Box"

export function Task1() {

    return (<Box width="100%" pt={5} pb={5} bg="bgAvatar">
                <Profile
                username={user.username}
                tag={user.tag}
                location={user.location}
                avatar={user.avatar}
                stats={user.stats}
                />
        </Box>);
}