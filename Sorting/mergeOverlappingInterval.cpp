#include <iostream>
#include <algorithm>
using namespace std;

//O(nlog n)

struct Interval {
    int start;
    int end;
};

bool myComp(Interval a, Interval b) {
    return a.start < b.start;
}

void mergeIntervals(Interval arr[], int n) {
    sort(arr, arr + n, myComp);
    int res = 0;
    for (int i = 1; i < n; i++) {
        if (arr[res].end >= arr[i].start) {
            arr[res].end = max(arr[res].end, arr[i].end);
            arr[res].start = min(arr[res].start, arr[i].start);
        } else {
            res++;
            arr[res] = arr[i];
        }
    }
    for (int i = 0; i <= res; i++) {
        cout << arr[i].start << " " << arr[i].end << endl;
    }
}

int main() {
    Interval arr[] = {{1, 3}, {2, 6}, {8, 10}, {15, 18}};
    int n = sizeof(arr) / sizeof(arr[0]);

    mergeIntervals(arr, n);

    return 0;
}
