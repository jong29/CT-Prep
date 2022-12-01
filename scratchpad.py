def solution(arr):
    def reduce(arr, answer, xcoor, ycoor, size):
        print(xcoor, ycoor)
        initial = arr[ycoor][xcoor]
        reduceable = True
        if size == 1:
            answer[initial] += 1
            return
        
        for i in range(size):
            for j in range(size):
                if arr[xcoor+i][ycoor+j] != initial:
                    reducable = False
                    break
        if reduceable:
            answer[initial] += 1
        else:
            for i in range(2):
                for j in range(2):
                    reduce(arr, answer, xcoor+i*(size/2), ycoor+j(size/2), size/2)
        return
    
    answer = [0,0]
    dim = len(arr)/2
    print(answer)
    print(dim)
    for i in range(2):
        for j in range(2):
            reduce(arr, answer, i*dim, j*dim, dim)
    return answer

print(solution([[1,1,0,0],[1,0,0,0],[1,0,0,1],[1,1,1,1]]))