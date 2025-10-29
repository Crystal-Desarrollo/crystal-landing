@props(['projects' => []])
@php
    // Divide projects into two columns
    $midpoint = ceil(count($projects) / 2);
    $leftColumn = array_slice($projects, 0, $midpoint);
    $rightColumn = array_slice($projects, $midpoint);
@endphp

<div
  class="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-20 w-full max-w-4xl mx-auto my-8 lg:my-16"
>
    <div class="flex flex-col gap-10 lg:gap-20">
        @foreach($leftColumn as $project)
            <x-projects.project-card
              :title="$project['title']"
              :class="$project['class']"
              :src="$project['src']"
              :route-name="$project['routeName']"
            />
        @endforeach
    </div>
    <div class="flex flex-col gap-10 lg:gap-20 lg:mt-32">
        @foreach($rightColumn as $project)
            <x-projects.project-card
              :title="$project['title']"
              :class="$project['class']"
              :src="$project['src']"
              :route-name="$project['routeName']"
            />
        @endforeach
    </div>
</div>
