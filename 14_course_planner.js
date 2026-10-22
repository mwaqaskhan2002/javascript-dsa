/*
14  Course Planner
Concept: Topological Sort
Problem Statement
Given course prerequisites, determine whether all courses can be completed.

Input
Courses = 2

Prerequisites:
0 → 1
1 → 0

Expected Output
false
*/

/*
Function buildGraph(numCourses, prerequisites):
    Set graph = empty map or array of lists for each course
    
    FOR each pair [course, pre] IN prerequisites:
        Add course to graph[pre]
    END FOR
    
    RETURN graph
End Function

Function dfs(course, graph, visited):

    IF visited[course] == 1:
        RETURN true
    END IF

    IF visited[course] == 2:
        RETURN false
    END IF

    visited[course] = 1

    FOR each neighbor IN graph[course]:
        IF dfs(neighbor, graph, visited) IS TRUE:
            RETURN true // Cycle upar pass kar do
        END IF
    END FOR

    visited[course] = 2
    
    RETURN false // Is branch mein koi cycle nahi mili
End Function

Function canFinishCourses(numCourses, prerequisites):
    
    Set graph = buildGraph(numCourses, prerequisites)
    Set visited = array of size numCourses filled with 0
    
    FOR i FROM 0 TO numCourses - 1:
        IF visited[i] == 0:
            IF dfs(i, graph, visited) IS TRUE:
                RETURN false // Courses complete karna NA-MUMKIN hai!
            END IF
        END IF
    END FOR

    RETURN true // Alhamdulillah! Koi cycle nahi mili, saare courses complete ho sakte hain.
End Function
*/

function buildGraph(numCourses, prerequisites){

    let graph = Array.from({ length: numCourses }, () => []);

    for (const pair of prerequisites) {        
        let course = pair[0];
        let pre = pair[1];

        graph[pre].push(course);
    }

    return graph;
}

function dfs(course, graph, visited) {
    
    if (visited[course] == 1) {
        return true
    }
    if (visited[course] == 2) {
        return false
    }

    visited[course] = 1

    for (const neighbour of graph[course]) {
        if (dfs(neighbour, graph, visited)){
            return true
        }
    }

    visited[course] = 2
    return false
}

function canFinishCourses(numCourses, prerequisites){
    let graph = buildGraph(numCourses, prerequisites);
    let visited = new Array(numCourses).fill(0);

    for (let i = 0; i < numCourses; i++) {
        if (visited[i] == 0) {
            if (dfs(i, graph, visited)){
                return false;
            }
        } 
    }
    return true;
}

const numCourses = 2

const prerequisites = [
    [1, 0],
    [0, 1]
]

console.log(`${canFinishCourses(numCourses, prerequisites)}`);