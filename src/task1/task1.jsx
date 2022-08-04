import { Profile } from "task1/components/profile";
import user from "task1/user.json"

export function Task1() {

    return (<Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
    />);
}