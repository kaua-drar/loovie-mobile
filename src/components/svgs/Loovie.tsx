import { SvgProps } from '@/types';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export function LoovieLogo({
  color = '#9D0208',
  size = 219,
  ...props
}: SvgProps) {
  return (
    <Svg
      width={size}
      height={(size * 221) / 219}
      viewBox="0 0 219 221"
      fill="none"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M111.723.108c3.727.09 8.756.494 11.225.854 2.47.315 6.691 1.125 9.43 1.71 2.739.584 6.062 1.393 7.409 1.798 1.347.36 4.625 1.484 7.319 2.519 2.649.99 6.69 2.698 8.935 3.823 2.29 1.124 5.299 2.653 6.646 3.418 1.347.764 4.176 2.518 6.286 3.912 2.111 1.395 5.793 4.138 8.217 6.027 2.38 1.934 5.883 4.992 7.768 6.791 1.886 1.754 4.805 4.857 6.466 6.836a199.304 199.304 0 015.703 7.196c1.437 1.98 3.547 5.037 4.625 6.746 1.078 1.71 2.739 4.588 3.682 6.297.988 1.709 2.38 4.452 3.143 6.071.763 1.62 2.425 5.532 3.727 8.77 1.302 3.239 2.964 8.276 3.727 11.244.763 2.968 1.751 7.51 2.155 10.12.584 3.417.808 7.555.808 15.066.045 7.78-.179 11.558-.763 15.291-.404 2.744-1.078 6.566-1.482 8.545-.359 1.979-1.032 4.813-1.481 6.297-.449 1.484-1.168 3.913-1.617 5.397-.404 1.484-1.661 4.902-2.694 7.645-1.078 2.744-3.547 7.871-5.478 11.469-1.931 3.598-4.401 7.825-5.478 9.444-1.123 1.62-3.952 5.263-6.376 8.096-2.38 2.833-6.017 6.791-8.083 8.77-2.11 1.979-5.388 4.902-7.364 6.521-1.976 1.574-6.511 4.813-10.103 7.151-3.592 2.384-8.666 5.352-11.36 6.656-2.649 1.305-6.87 3.104-9.43 3.958-2.514.9-6.421 2.114-8.621 2.699-2.2.584-6.78 1.484-10.103 1.979-3.323.494-8.576 1.169-11.675 1.439-4.4.449-7.453.449-14.144 0-4.67-.27-10.642-.9-13.246-1.35-2.604-.449-5.119-1.034-5.613-1.259-.494-.27-1.616-.585-2.47-.764-.852-.18-3.277-.9-5.388-1.664-2.11-.765-5.253-1.889-6.96-2.519-1.75-.63-5.971-2.564-9.429-4.318-3.458-1.709-8.127-4.362-10.328-5.846-2.245-1.484-6.376-4.588-9.205-6.836-2.828-2.294-6.69-5.757-8.531-7.691a415.226 415.226 0 01-6.87-7.601c-1.976-2.203-5.254-6.701-7.409-9.894-2.11-3.193-4.535-7.196-5.343-8.905-.808-1.664-1.482-3.103-1.482-3.238 0-.135-.674-1.709-1.527-3.508-.853-1.754-2.02-4.768-2.649-6.612-.629-1.843-1.347-4.407-1.661-5.621-.27-1.26-.809-3.283-1.123-4.498-.36-1.259-1.033-4.272-1.527-6.746-.449-2.474-1.122-6.431-1.436-8.77-.36-2.564-.584-8.095-.54-13.942 0-6.207.315-11.603.764-15.067.404-2.968 1.167-7.33 1.617-9.67.493-2.338 1.526-6.206 2.29-8.544.808-2.339 2.11-5.982 3.008-8.096.853-2.113 2.739-6.026 4.266-8.77 1.482-2.743 4.13-7.06 5.837-9.67 1.751-2.608 4.266-6.16 5.613-7.87 1.347-1.709 5.119-5.801 8.352-9.04 3.233-3.193 8.217-7.6 11.046-9.714 2.828-2.114 6.286-4.543 7.633-5.397 1.347-.9 3.592-2.249 4.94-3.013 1.346-.765 4.4-2.339 6.735-3.463 2.335-1.125 6.376-2.879 8.98-3.823 2.604-.99 5.837-2.114 7.184-2.474 1.348-.36 3.683-.99 5.164-1.349 1.482-.36 4.086-.945 5.838-1.304 1.706-.36 4.849-.855 6.96-1.125 2.11-.225 4.939-.54 6.286-.63 1.347-.09 5.478-.09 9.205.046zM94.301 5.055c-.853.135-1.033.45-1.123 1.934-.09 1.664 0 1.799 1.123 1.799.718 0 2.02-.18 2.963-.36 1.437-.27 1.662-.495 1.662-1.53 0-.719-.09-1.573-.225-1.933-.135-.36-.36-.63-.584-.63-.18.045-.853.18-1.526.315-.674.135-1.707.315-2.29.405zm12.258 2.833h5.837V4.29h-5.837v3.598zm14.863-1.394c-.045 1.574.089 1.889.943 2.024.583.135 1.751.315 2.604.495 1.527.224 1.571.18 1.886-1.44.179-.944.179-1.844 0-2.023-.18-.135-1.437-.405-2.829-.585l-2.515-.315-.089 1.844zm-41.67 2.069c.09.225.315 1.17.494 2.024l.315 1.574c4.31-1.26 5.567-1.664 5.612-1.71.045-.044-.045-.944-.27-2.023-.179-1.034-.538-1.889-.763-1.844-.224.045-1.571.405-2.963.81-1.437.404-2.515.899-2.425 1.169zm55.724 2.473c3.862 1.395 5.074 1.665 5.209 1.485.179-.225.539-1.035.808-1.844.269-.81.359-1.53.18-1.62-.18-.09-1.258-.45-2.38-.719-1.078-.315-2.2-.63-2.47-.765-.224-.09-.628.63-.898 1.664l-.449 1.8zM66.91 13.556c.045.36.36 1.17.629 1.844.314.675.584 1.304.584 1.35 0 .044 1.167-.36 2.604-.9s2.65-1.125 2.694-1.215c0-.135-.27-.989-.629-1.934-.314-.944-.808-1.663-1.077-1.663-.225.044-1.437.494-2.65.989-1.347.54-2.2 1.17-2.155 1.529zm24.562.315c-1.706.45-3.368.944-3.682 1.124-.36.225.18 2.789 2.2 9.535 1.482 5.037 2.829 9.354 3.009 9.534.134.225 2.828.045 5.882-.36 4.265-.584 7.498-.674 13.246-.45 4.221.136 8.576.45 9.654.675 1.122.225 2.065.36 2.11.315.045-.045.853-3.418 1.707-7.465.898-4.093 1.885-8.5 2.155-9.805.494-2.024.449-2.473-.135-2.788-.359-.225-2.559-.63-4.939-.855-2.335-.27-6.556-.54-9.43-.63-2.828-.044-8.172 0-11.899.18-3.771.135-8.082.585-9.878.99zm57.026 2.024l5.164 2.338c1.077-2.608 1.391-3.508 1.391-3.598 0-.135-1.122-.674-2.469-1.259-1.392-.54-2.694-.99-2.919-.99-.224 0-.584.765-.763 1.755l-.404 1.754zm-93.98 3.553c-.495.27-.45.674.224 2.024.449.944.898 1.709 1.032 1.709.135 0 1.258-.63 2.56-1.35 2.38-1.349 2.38-1.349 1.706-2.608-.36-.675-.853-1.44-1.078-1.71-.269-.314-.943-.134-2.11.585-.988.585-2.02 1.17-2.335 1.35zm82.215-.315c-.089.585-1.077 4.767-2.2 9.22-1.122 4.452-1.931 8.095-1.886 8.14.09.045 2.066.81 4.401 1.71 2.335.899 5.792 2.473 7.633 3.507 1.841.99 4.58 2.654 6.062 3.643 1.482.99 3.592 2.519 4.715 3.373 1.122.9 2.649 2.204 3.457 2.968l1.392 1.395c3.009-2.564 6.331-5.892 9.295-8.995l5.388-5.712c-5.209-4.902-9.16-8.006-12.123-10.074-2.964-2.024-7.23-4.588-9.43-5.622-2.245-1.034-6.511-2.744-9.564-3.868-3.009-1.08-5.658-1.934-5.927-1.934-.225 0-.539.225-.719.54-.179.315-.404 1.08-.494 1.709zm-71.978 4.093c-1.841.9-5.613 2.968-8.307 4.632-2.74 1.709-6.466 4.227-8.307 5.577-1.841 1.394-4.22 3.373-5.298 4.362l-1.976 1.8c5.792 5.261 9.25 8.365 11.405 10.254 2.155 1.888 4.086 3.462 4.266 3.417.18 0 1.886-1.214 3.727-2.698 1.84-1.53 4.49-3.463 5.837-4.363 1.347-.854 4.58-2.743 7.184-4.182 2.605-1.44 6.107-3.148 7.858-3.868 1.706-.675 3.188-1.26 3.233-1.26.045 0-.494-1.618-1.167-3.597-.674-1.979-2.11-6.162-3.188-9.22-1.078-3.103-2.066-5.757-2.245-5.892-.135-.18-2.38.54-4.985 1.575-2.559 1.034-6.196 2.608-8.037 3.463zm95.642-1.62c0 .09 1.122.81 2.47 1.575 1.347.72 2.514 1.259 2.604 1.214.09-.045.494-.675.898-1.35.404-.674.808-1.393.853-1.618.045-.18-1.033-.945-2.38-1.664-1.347-.72-2.559-1.395-2.694-1.44-.135-.09-.584.585-.988 1.44-.449.899-.763 1.709-.763 1.843zm-120.563 8.32l2.874 2.924 4.31-4.227-2.739-2.699-4.445 4.003zm131.339-.629c.36.405 1.437 1.35 2.335 2.069l1.707 1.26 2.245-3.149c-2.515-2.249-3.503-3.058-3.817-3.238-.359-.18-1.078.225-1.841.99-1.167 1.214-1.257 1.393-.629 2.068zM106.514 41.17h5.837v-3.598h-5.837v3.598zm-78.175.63c0 .54.674 1.754 1.482 2.743.808.945 5.927 5.307 11.36 9.625s10.552 8.14 11.316 8.455c1.212.495 1.706.495 2.694.045.943-.45 1.302-.944 1.347-2.024.09-1.169-.225-1.889-1.572-3.328-.898-1.034-3.951-3.912-6.78-6.431-2.784-2.474-6.466-5.712-8.172-7.106-1.707-1.44-4.042-3.193-5.254-3.958-1.167-.72-2.65-1.35-3.323-1.35-.763 0-1.571.45-2.155 1.215-.539.63-.988 1.62-.943 2.114zm64.704-2.429c.764 2.609 1.033 3.464 1.033 3.508.045.09 1.257-.09 2.694-.45 1.751-.404 2.56-.809 2.56-1.259 0-.36-.135-1.124-.225-1.664-.135-.63-.539-.99-1.033-.99-.404.046-1.706.27-2.918.45l-2.11.405zm25.999 1.485c-.135 1.079.045 1.304 1.392 1.664.898.224 2.155.54 2.829.674 1.032.225 1.212.09 1.257-.764 0-.54.09-1.44.224-1.934.225-.765-.044-.945-2.559-1.35-2.021-.36-2.874-.36-2.919 0-.045.27-.134 1.035-.224 1.71zm53.523 6.61c-4.086 3.824-8.98 8.68-10.911 10.705-1.886 2.024-3.502 4.002-3.502 4.362 0 .405.628 1.305 1.347 2.024.763.765 1.661 1.26 2.02 1.124.405-.09 5.389-3.912 11.136-8.41 5.748-4.497 11.361-9.13 12.528-10.254 2.11-1.979 2.11-2.024 1.616-3.508-.314-.854-1.212-2.114-2.02-2.833-.808-.72-1.796-1.26-2.245-1.26-.449 0-1.213.225-1.707.54-.493.27-4.22 3.643-8.262 7.51zm-41.355-4.811c-.269 1.034-.404 1.933-.314 1.978.045.045 1.257.63 2.694 1.26l2.56 1.124 1.347-4.048c-1.886-.63-3.188-1.124-4.131-1.529l-1.662-.674-.494 1.889zm-50.65.45c-.09.044.09.854.315 1.753.27.945.673 1.71.853 1.71.18 0 1.257-.36 2.425-.81 1.122-.405 2.2-.855 2.335-.99.18-.135.044-.99-.27-1.934-.314-.899-.673-1.664-.808-1.664-.135.045-1.212.45-2.47.945-1.212.495-2.29.944-2.38.99zm62.011 3.777c-.494.72-.988 1.44-1.168 1.71-.135.224.764 1.169 2.066 2.068l2.335 1.62c1.571-2.34 1.93-3.24 1.796-3.464-.135-.27-1.123-1.08-2.201-1.799l-1.975-1.35-.853 1.215zm-49.303 1.44c-2.694.719-6.825 2.113-9.205 3.103-2.335 1.034-5.568 2.653-7.184 3.598-1.572.989-4.4 2.878-6.287 4.272-1.84 1.394-4.625 3.823-6.196 5.352-1.572 1.53-4.311 4.722-6.107 7.061-1.751 2.384-4.266 6.297-5.523 8.77-1.257 2.474-3.008 6.656-3.862 9.22-.853 2.608-1.93 6.656-2.38 8.995-.538 2.923-.763 6.566-.763 11.243 0 4.678.225 8.411.764 11.244.404 2.384 1.481 6.431 2.334 8.995.898 2.608 2.695 6.881 4.042 9.445 1.392 2.608 3.637 6.341 5.029 8.32 1.437 1.979 4.086 5.127 5.927 7.016 1.886 1.889 5.119 4.677 7.184 6.206 2.11 1.53 6.152 4.003 8.98 5.442 2.874 1.44 6.78 3.194 8.757 3.868 1.975.63 5.523 1.619 7.857 2.114 3.413.765 5.928.944 12.124.944 5.748.045 8.981-.179 11.899-.764 2.245-.45 5.793-1.304 7.858-1.934 2.111-.63 5.748-2.114 8.083-3.283 2.379-1.215 6.196-3.463 8.531-4.992 2.56-1.709 6.152-4.723 9.025-7.601 2.829-2.878 5.883-6.431 7.589-9.04 1.527-2.339 3.457-5.577 4.266-7.196.808-1.574 1.975-4.317 2.649-6.071.629-1.709 1.661-5.038 2.245-7.421.629-2.339 1.347-6.791 1.661-9.895.405-4.182.405-6.881.045-10.794-.269-2.833-1.077-7.465-1.796-10.344-.718-2.833-2.155-7.06-3.188-9.444-.988-2.339-2.604-5.577-3.592-7.196-.943-1.574-2.919-4.543-4.4-6.522-1.482-1.978-4.446-5.261-6.601-7.285-2.111-2.024-5.703-4.948-7.993-6.477-2.29-1.484-5.388-3.328-6.87-4.092-1.482-.72-4.176-1.934-6.062-2.654-1.841-.72-5.388-1.799-7.858-2.384-2.469-.63-6.465-1.304-8.845-1.574-2.425-.27-5.568-.45-6.96-.404-1.437.044-4.311.224-6.421.494-2.066.225-6.017.99-8.756 1.664zm-23.888.674l2.11 3.373 4.895-3.373c-1.303-2.069-1.976-2.698-2.29-2.788-.315-.045-1.482.584-2.65 1.349l-2.065 1.439zm-49.033 3.148c2.424 2.474 3.188 3.058 3.232 2.923.09-.09.943-1.169 1.931-2.383l1.751-2.204c-2.424-1.979-3.233-2.563-3.367-2.563-.09 0-.943.944-1.886 2.113l-1.662 2.114zm170.134-1.799c2.515 3.508 3.458 4.453 3.772 4.363.27-.09.988-.585 1.527-1.125.584-.54 1.033-1.169 1.033-1.439 0-.225-.764-1.17-1.707-2.114-.943-.944-1.796-1.664-1.93-1.664-.09-.045-.764.45-1.437.99l-1.258.99zm-162.86 4.857c-1.482 2.294-3.727 6.252-4.984 8.86a337.191 337.191 0 00-4.087 8.86l-1.84 4.183c8.89 3.463 13.425 5.172 15.85 6.027 3.996 1.484 4.4 1.529 4.715.81.224-.406.943-2.294 1.571-4.139.674-1.843 2.83-6.161 4.805-9.58 1.975-3.372 3.592-6.295 3.592-6.52 0-.18-3.278-2.789-7.32-5.757-3.995-3.013-7.767-5.757-8.396-6.162l-1.167-.72-2.74 4.138zm122.673-.044l4.49 4.002 2.38-2.968c-2.874-2.968-3.862-3.823-3.996-3.823-.135 0-.854.63-1.572 1.394l-1.302 1.395zm27.749 3.328a993.483 993.483 0 01-7.319 5.441c-.134.09.629 1.305 1.617 2.744 1.033 1.394 2.784 4.272 3.906 6.386 1.123 2.114 2.695 5.442 3.458 7.421.808 1.979 1.571 3.778 1.706 3.958.18.18 3.458-.54 7.274-1.664 3.817-1.124 8.173-2.384 9.654-2.879 2.425-.72 2.694-.899 2.56-1.888-.09-.63-1.213-3.464-2.47-6.297-1.257-2.833-3.053-6.521-3.996-8.185-.943-1.71-1.706-3.148-1.706-3.283 0-.135-1.213-1.934-2.695-4.048-1.796-2.564-2.963-3.823-3.547-3.823-.494 0-.988.225-1.122.45-.135.27-3.458 2.788-7.32 5.667zM60.22 56.19l2.514 2.968C66.012 56.506 67 55.561 67 55.291c0-.224-.449-.9-.988-1.439-.584-.584-1.212-1.034-1.482-1.034-.224 0-1.302.764-2.38 1.709l-1.93 1.664zm-45.756 7.15c0 .136.629.54 1.347.945.764.36 1.572.54 1.796.45.27-.135.943-1.214 1.572-2.384l1.078-2.113c-2.38-1.26-3.188-1.575-3.323-1.575-.09 0-.719.99-1.347 2.204-.629 1.26-1.123 2.339-1.123 2.474zm183.561-2.743c.045.045.629 1.08 1.302 2.34.674 1.213 1.213 2.293 1.213 2.338.044.045.853-.315 1.841-.855l1.796-.99c-1.886-3.687-2.605-4.767-2.784-4.767-.18 0-1.033.405-1.886.945-.853.495-1.482.944-1.482.99zM48.231 71.032c1.84 1.89 2.604 2.43 2.829 2.43.27 0 1.122-.9 1.93-2.025.809-1.08 1.437-2.159 1.437-2.338 0-.18-.628-.765-1.437-1.35-.808-.54-1.571-.99-1.706-.99-.09 0-.853.945-1.661 2.115l-1.392 2.159zm118.407 1.8c2.156 3.687 2.919 4.722 3.143 4.722.18 0 .943-.495 1.662-1.08l1.347-1.079c-2.11-3.913-2.829-5.037-2.919-4.992-.134 0-.898.54-1.706 1.214l-1.527 1.215zm37-1.395c-.045.045.314 1.305.808 2.879.494 1.529.988 2.788 1.123 2.788.089 0 1.032-.405 2.02-.9l1.796-.899c-1.302-3.643-1.975-4.767-2.29-4.812-.359-.045-1.257.135-1.975.405-.764.27-1.392.494-1.482.54zM9.57 76.115c0 .27.449.63.988.72.584.134 1.392.314 1.796.449.584.225.988-.135 1.482-1.394.404-.945.808-2.16.898-2.699.18-.854-.045-1.124-1.482-1.484-.898-.225-1.796-.45-1.976-.45-.18 0-.628.945-1.033 2.16-.359 1.168-.718 2.383-.673 2.698zm33.317 6.116c.09.09.764.495 1.572.9.808.404 1.527.674 1.616.63.09-.09.494-.72.898-1.485.36-.72.899-1.889 1.168-2.563.449-1.215.404-1.305-1.212-1.934-.898-.405-1.797-.675-1.931-.675-.18 0-.719 1.124-1.257 2.474-.54 1.349-.898 2.563-.854 2.653zm129.499 1.08l.898 2.698c.494 1.484.808 1.844 1.392 1.62.449-.136 1.257-.316 1.796-.45.584-.09.943-.45.808-.72-.09-.315-.449-1.664-.808-2.924-.359-1.304-.853-2.383-1.078-2.338-.179 0-1.033.314-1.841.674-1.077.45-1.392.855-1.167 1.44zM5.484 89.337c.134.18 1.033.405 1.975.45l1.707.135a736.645 736.645 0 011.751-5.397L9.66 84.21c-.674-.18-1.527-.405-1.931-.585-.539-.225-.898.36-1.617 2.564-.494 1.574-.763 2.968-.628 3.148zM208.802 84.3c-.18.18-.09 1.574.224 3.058.584 2.699.584 2.744 1.931 2.474a15.55 15.55 0 002.021-.54c.628-.225.628-.54-.09-3.058-.494-1.62-1.078-2.789-1.392-2.789-.315.045-.943.135-1.437.27-.494.135-1.078.36-1.257.585zM12.533 90.147c-.359 1.619-.898 5.172-1.167 7.87-.314 2.744-.494 7.061-.494 9.67 0 2.608.225 6.836.539 9.444.27 2.609.629 5.937.763 7.421.27 2.339.404 2.699 1.213 2.654.493-.045 3.098-.405 5.837-.855 2.694-.405 7.05-1.124 9.654-1.619 2.56-.495 4.76-.944 4.804-.989.045-.045-.09-1.395-.314-3.014-.224-1.619-.539-5.037-.718-7.645-.18-2.744-.09-6.881.224-9.895.314-2.833.764-6.431 1.078-7.96.449-2.429.449-2.834-.135-3.103a61.067 61.067 0 00-3.143-.945c-1.392-.36-3.098-.855-3.817-1.034-.763-.18-3.682-.99-6.51-1.754-2.874-.81-5.524-1.53-5.928-1.664-.404-.135-.853-.045-.943.135-.134.18-.538 1.664-.943 3.283zm171.393 2.833c-.225.225-.135 2.159.224 4.498.315 2.293.719 6.791.853 9.984.135 3.508.045 7.825-.269 10.794-.314 2.743-.404 5.082-.225 5.262.225.135 4.67 1.349 9.879 2.698l9.474 2.384c.764-3.148 1.213-7.061 1.527-10.794.359-4.992.359-8.77 0-14.617-.269-4.317-.808-9.49-1.167-11.468-.36-1.98-.674-3.643-.674-3.688 0-.09-.18-.135-.359-.135-.18.045-4.49 1.08-9.609 2.384-5.074 1.304-9.43 2.518-9.654 2.698zm-144.496.45l-.674 2.114c1.886.314 2.74.494 3.144.674.494.18.853-.405 1.437-2.563.404-1.574.718-2.879.673-2.924-.045 0-.853-.18-1.751-.36-1.168-.224-1.706-.134-1.841.27-.135.36-.584 1.575-.988 2.789zm136.683 1.619c-.135.18-.045 1.574.224 3.103l.494 2.834c2.066-.45 2.919-.72 3.188-.9.315-.18.315-1.08-.135-3.058-.359-1.71-.808-2.834-1.167-2.789-.314.045-.943.135-1.437.27-.494.135-1.033.36-1.167.54zm33.721 4.003c0 1.169.09 2.518.225 3.013.224.764.584.899 2.38.764l2.11-.179c-.539-2.564-.673-3.958-.673-4.723 0-1.259-.18-1.484-1.033-1.439-.539.045-1.437.135-2.021.225-.898.18-.988.45-.988 2.339zM3.733 98.827c-.045 1.034-.135 2.338-.225 2.923-.224.9-.09.99 1.796.99h2.02v-5.847H3.734v1.934zm34.125 10.254h3.593v-5.847h-3.593v5.847zm139.467.764c-.18 1.17-.269 2.474-.269 2.924 0 .629.404.809 2.245.809h2.245v-5.846h-3.952l-.269 2.113zm-174.49 1.35c0 .404.134 1.709.314 2.923l.36 2.114h4.04c-.539-2.249-.673-3.688-.673-4.588 0-1.349-.18-1.709-.764-1.619-.449 0-1.347.135-2.02.225-.853.09-1.257.405-1.257.945zm207.448 5.037h4.491l.179-5.262c-2.739-.45-3.816-.585-4.086-.585-.404 0-.584.9-.584 2.924v2.923zM38.487 119.74l.27 2.339c2.963-.45 3.861-.585 3.861-.63.045 0-.135-1.304-.449-2.878l-.494-2.789c-3.592 0-3.861.135-3.682.81.135.404.36 1.844.494 3.148zm137.311 2.878c-.314 1.574-.494 2.879-.449 2.924.09.045.943.224 1.931.359l1.796.315c.808-4.092.898-5.397.764-5.532-.18-.18-1.033-.404-1.886-.584l-1.617-.27-.539 2.788zM4.406 126.441c.135.675.36 2.024.584 2.968.314 1.709.314 1.709 2.11 1.395.988-.18 1.886-.315 1.931-.36.09-.045-.135-1.349-.449-2.879-.494-2.383-.718-2.833-1.482-2.743-.494 0-1.347.135-1.886.225-.853.135-.987.36-.808 1.394zm204.62.72c-.045 1.394-.135 2.698-.18 2.878-.044.18.764.405 1.797.45l1.886.09c.404-4.003.449-5.172.404-5.217-.09-.045-.988-.225-2.021-.405l-1.841-.315-.045 2.519zM40.418 129.14c.135.404.494 1.709.763 2.878.494 1.979.629 2.114 1.662 1.889.628-.135 1.481-.36 1.885-.45.54-.09.719-.45.54-.944-.136-.45-.405-1.664-.674-2.699-.315-1.439-.629-1.889-1.213-1.844-.404 0-1.302.135-2.02.225-.943.09-1.168.315-.943.945zm131.923 7.061c-.225.719.09 1.079 1.482 1.664l1.706.719c1.123-2.518 1.572-3.733 1.706-4.272.27-.855.045-1.125-1.257-1.709-.853-.36-1.661-.675-1.796-.675s-.539.765-.898 1.709a21.665 21.665 0 00-.943 2.564zm-151.5-.27l-4.715 1.259c.224 2.743.628 4.318.987 5.307.36.989.943 2.474 1.303 3.283.359.81.628 1.619.628 1.799 0 .18 1.213 2.744 2.694 5.712 1.482 2.968 4.49 7.87 6.646 10.884 2.155 3.013 4.85 6.611 6.017 8.005 1.212 1.349 2.425 2.474 2.694 2.474.314 0 3.502-2.924 7.095-6.522 3.592-3.597 6.555-6.611 6.645-6.656.045-.045-1.482-2.428-3.457-5.262-1.976-2.833-4.625-6.971-5.838-9.22-1.257-2.203-3.053-6.431-3.996-9.309-.898-2.924-1.886-5.307-2.11-5.262-.27 0-2.56.539-5.164 1.124-2.604.585-6.825 1.664-9.43 2.384zm160.031.944c-.673 1.844-1.975 4.992-2.963 6.971s-2.739 5.217-3.952 7.196c-1.167 1.979-3.502 5.307-5.118 7.421l-3.009 3.823c1.617 1.529 4.67 4.317 7.903 7.151 3.637 3.193 6.107 5.037 6.511 4.902.359-.135 2.2-1.934 4.041-4.048 1.841-2.114 4.355-5.262 5.568-7.016 1.167-1.799 2.918-4.542 3.817-6.161a104.88 104.88 0 003.367-6.746c.943-2.114 2.38-5.667 3.143-7.961l1.392-4.093a573.604 573.604 0 01-10.103-3.103 995.455 995.455 0 01-7.947-2.563c-.659-.21-1.063-.12-1.213.269-.135.315-.763 2.114-1.437 3.958zm24.068 5.757c0 .18.898.63 2.021.989l1.975.675c1.033-3.463 1.482-4.812 1.617-5.172.179-.495-.18-.765-1.437-1.035-.943-.224-1.931-.494-2.2-.629-.27-.09-.809.899-1.213 2.294-.449 1.394-.763 2.698-.763 2.878zM7.46 139.799c1.302 4.002 1.84 5.172 2.02 5.172.225 0 1.078-.225 1.93-.495.854-.315 1.617-.54 1.662-.585.09 0-.27-1.169-.718-2.518-.45-1.35-1.078-2.519-1.437-2.519-.36-.045-1.257.135-2.02.45l-1.438.495zm35.472.449l2.56 5.172c2.604-1.124 3.412-1.484 3.502-1.529.045-.045-.404-1.214-1.033-2.653-.583-1.439-1.257-2.564-1.436-2.564-.18.045-1.078.405-1.976.81l-1.617.764zm123.841 6.746c0 .225.584.81 1.347 1.215.719.449 1.437.809 1.572.809.089 0 .853-.944 1.616-2.158l1.437-2.114c-2.021-1.574-2.829-2.024-3.098-2.024-.225 0-.988.854-1.662 1.889-.673 1.079-1.212 2.114-1.212 2.383zm-117.42 4.678c2.784 3.148 3.772 4.047 4.042 4.092.224 0 1.032-.584 1.796-1.349l1.347-1.349c-3.143-3.148-4.176-4.048-4.31-4.048-.136 0-.854.585-1.572 1.305l-1.303 1.349zm151.366 1.529l-.718 1.709c2.784 1.394 3.682 1.709 3.727 1.664.089-.045.718-1.259 1.347-2.698l1.212-2.564c-2.784-1.079-3.772-1.349-3.996-1.349-.225 0-.494.315-.629.764-.135.45-.539 1.529-.943 2.474zm-41.13 2.833l2.918 2.519c2.964-3.373 3.817-4.453 3.817-4.543 0-.134-.718-.809-1.527-1.484l-1.571-1.214-3.637 4.722zm-147.19-2.698c1.75 3.508 2.335 4.632 2.47 4.722.09.135.942-.18 1.93-.674l1.751-.9c-2.02-3.463-2.784-4.542-2.963-4.587-.18-.045-.988.27-1.796.674l-1.392.765zM48.5 169.572c-3.951 4.182-8.172 8.68-9.34 9.984-1.167 1.304-2.11 2.743-2.11 3.238 0 .495.674 1.664 1.527 2.609.808.944 2.245 2.069 3.188 2.563l1.661.9c3.054-3.463 6.915-8.411 10.597-13.268 3.637-4.812 7.274-9.849 8.083-11.243.808-1.35 1.436-2.789 1.436-3.239 0-.449-.404-1.214-.898-1.709-.493-.494-1.257-.899-1.75-.899-.45 0-1.842.809-3.01 1.754-1.212.944-5.432 5.127-9.384 9.31zm105.97-6.117c-.225.9.134 1.664 1.437 3.373.898 1.259 5.253 6.477 9.654 11.604 4.669 5.442 8.307 9.354 8.8 9.354.405 0 1.752-.674 2.964-1.484 1.212-.809 2.47-2.024 2.829-2.698.359-.81.449-1.529.18-2.024-.18-.45-4.85-5.037-10.328-10.254-5.478-5.172-10.507-9.67-11.181-9.985-.673-.27-1.526-.539-1.931-.539-.404 0-1.032.314-1.436.764-.36.45-.809 1.304-.988 1.889zm39.738 1.799c2.425 1.754 3.188 2.294 3.278 2.294.045 0 .719-.855 1.437-1.889.763-1.08 1.527-2.204 1.706-2.519.225-.36-.269-.854-1.481-1.484-.988-.495-1.841-.854-1.886-.854-.09 0-.764.989-1.572 2.248l-1.482 2.204zm-177.14-.989c2.605 3.553 3.458 4.587 3.593 4.587.09 0 .898-.45 1.751-1.034l1.572-.99c-2.425-3.688-3.368-4.722-3.682-4.722-.315 0-1.168.495-1.886 1.079l-1.347 1.08zm127.882 4.227c-.942.72-2.02 1.484-2.379 1.709-.584.315-.494.585.449 1.979.583.9 1.257 1.619 1.437 1.619.179 0 1.212-.629 2.245-1.439 1.077-.765 2.065-1.529 2.245-1.664.224-.135-.225-.989-.943-1.889l-1.347-1.664-1.707 1.349zm-74.223 2.069c0 .18 1.033.9 2.245 1.574 1.257.675 2.335 1.17 2.38 1.125.09-.09.584-.765 1.122-1.575l.988-1.484c-3.457-2.069-4.67-2.698-4.85-2.698-.224 0-.718.629-1.122 1.349-.404.765-.763 1.529-.763 1.709zm-47.148 3.463l4.042 4.048c2.11-2.069 2.694-2.879 2.694-3.148 0-.225-.764-1.215-1.662-2.114-.943-.945-1.796-1.664-1.93-1.709-.18 0-.898.674-1.707 1.484l-1.437 1.439zm32.15 5.622c-2.649 3.823-4.714 7.106-4.67 7.241.09.18 1.393 1.259 2.92 2.383 1.57 1.125 5.118 3.239 7.857 4.678 2.784 1.439 6.87 3.373 9.115 4.272 2.2.9 4.536 1.709 5.12 1.754.942.135 1.301-.494 4.355-8.41 1.796-4.722 3.143-8.68 2.963-8.815-.18-.135-2.155-1.034-4.355-1.979-2.245-.944-5.748-2.743-7.858-3.957a215.23 215.23 0 01-6.421-4.003c-1.392-.945-2.65-1.709-2.74-1.709-.044 0-.448.36-.807.764-.404.45-2.874 3.958-5.478 7.781zm131.699-4.542c0 .134.629.854 1.392 1.619l1.392 1.349 4.221-4.273c-2.111-2.114-2.919-2.743-3.233-2.698-.27 0-1.257.854-2.155 1.889-.898 1.034-1.662 1.979-1.617 2.114zm-106.284.944c-.045.135.943.675 2.245 1.259 1.303.54 2.515.99 2.695.99.224 0 .673-.63 1.032-1.35.36-.764.674-1.574.674-1.799 0-.269-1.168-.989-2.605-1.574-1.392-.629-2.559-1.169-2.604-1.124 0 0-.314.765-.673 1.664-.36.945-.674 1.799-.764 1.934zm61.202 4.048c-2.47 1.169-5.253 2.518-6.196 2.878l-1.662.72c.988 2.608 2.425 6.296 3.817 9.894 1.347 3.598 2.559 6.566 2.604 6.611.045.09.988-.18 2.111-.539 1.122-.405 2.424-.855 2.918-1.08.494-.225 2.425-1.079 4.266-1.934 1.841-.809 4.76-2.248 6.511-3.193 1.706-.989 4.715-2.788 6.645-4.093l3.458-2.293c-1.886-2.429-3.862-4.992-5.613-7.196-1.706-2.249-3.772-4.812-4.49-5.757-.763-.899-1.437-1.664-1.572-1.619-.134 0-2.065 1.214-4.265 2.698-2.246 1.485-6.062 3.688-8.532 4.903zm-10.462-5.262c-.09.045.179.854.584 1.754.359.944.718 1.709.763 1.709.09 0 1.033-.315 2.155-.675 1.123-.405 2.29-.809 2.56-.899.449-.18.404-.675-.225-2.024-.404-1.035-.988-1.799-1.212-1.799-.27.045-1.347.45-2.47.944a74.77 74.77 0 00-2.155.99zm-12.079 2.698c-.045.045.135.855.449 1.799.449 1.394.719 1.664 1.437 1.439a43 43 0 012.604-.584c1.258-.225 1.662-.54 1.662-1.215 0-.494-.09-1.349-.18-1.934-.045-.539-.314-.989-.539-.944-.224 0-1.526.315-2.873.72-1.347.359-2.515.674-2.56.719zm-25.28 1.664c0 1.304.045 1.349 2.56 1.574 1.436.135 2.649.18 2.694.135.09-.09.269-.854.404-1.709.269-1.529.224-1.574-1.437-1.934a173.95 173.95 0 01-2.694-.629c-.539-.135-1.033.045-1.213.494-.18.405-.314 1.305-.314 2.069zm13.022.9v1.799h5.837c0-3.958-.045-4.048-1.257-4.003-.674.045-1.976.18-2.919.225-1.616.18-1.661.225-1.661 1.979zm-18.05 17.63c-1.258 3.778-1.797 5.891-1.483 6.161.225.225 1.976.72 3.817 1.125 1.841.359 5.074.854 7.184 1.124 2.111.225 7.768.36 12.573.27 4.805-.09 10.552-.45 12.797-.81 2.2-.36 4.49-.899 5.029-1.169.764-.36.988-.765.764-1.529-.135-.54-.719-2.609-1.303-4.588a858.158 858.158 0 00-2.469-8.095l-1.437-4.498c-4.266.855-8.172 1.215-11.36 1.395-4.266.18-7.364.09-11.45-.45-3.099-.405-6.242-.855-6.96-.989-1.302-.225-1.392-.18-2.56 3.058a281.482 281.482 0 00-3.143 8.995zm78.443-4.138c2.066 2.114 2.784 2.699 2.919 2.699.135-.045 1.123-.81 2.245-1.754l2.021-1.71c-2.111-2.563-2.784-3.283-2.919-3.283-.135 0-1.167.9-2.245 2.024l-2.021 2.024zm-122.493-.225c.045.27.988 1.214 2.11 2.114 1.123.944 2.245 1.709 2.515 1.709.224 0 .808-.675 1.302-1.484l.898-1.439c-1.572-1.619-2.514-2.474-3.188-2.969-1.168-.809-1.168-.809-2.425.405-.718.72-1.257 1.439-1.212 1.664zm113.962 5.622c-.314.27-.135.944.539 1.979l1.033 1.619c2.918-1.754 4.086-2.474 4.49-2.654.539-.359.494-.674-.494-2.248-.674-1.035-1.257-1.844-1.347-1.799-.135 0-.988.629-1.976 1.349-.988.765-2.02 1.529-2.245 1.754zm-103.186 2.294c.18.135 1.258.764 2.38 1.439l2.02 1.169 2.022-3.553c-3.503-2.114-4.67-2.698-4.895-2.698-.224 0-.718.764-1.122 1.664-.45.944-.63 1.844-.405 1.979zm92.544 2.518c.045.18.314 1.035.629 1.844.314.81.718 1.439.898 1.439.179 0 1.437-.494 2.829-1.124l2.469-1.124c-1.526-2.609-2.02-3.418-2.02-3.418-.045-.045-1.168.404-2.515.944-1.302.585-2.335 1.214-2.29 1.439zm-80.42 2.384c-.135.45.539 1.034 2.29 1.889l2.56 1.169c.808-1.844 1.077-2.788 1.077-3.283.045-.675-.494-1.079-2.11-1.664-1.168-.45-2.29-.81-2.47-.81-.18 0-.539.45-.718.99-.225.585-.494 1.349-.629 1.709zm67.084 1.979c-.045.09.135 1.079.449 2.249.359 1.169.808 2.023 1.078 1.933.224-.135 1.616-.584 3.008-1.034 1.437-.495 2.605-1.079 2.605-1.304 0-.27-.225-1.17-.539-2.024-.27-.855-.629-1.709-.808-1.889-.135-.135-1.482.225-2.964.809-1.482.63-2.739 1.17-2.829 1.26zm-54.556 2.069c-.27 1.034-.045 1.214 2.29 2.158 1.437.54 2.694.855 2.829.72.09-.135.449-1.034.763-2.024l.584-1.754a708.538 708.538 0 01-5.209-1.664c-.27-.135-.629.18-.763.63-.135.449-.36 1.304-.494 1.934zm40.816.494l.225 4.228 5.612-.9c0-3.103-.224-4.002-.449-4.047-.269-.09-1.571.09-2.918.315l-2.47.404zm-27.884 1.934c-.09.99 0 1.934.18 2.114.134.135 1.57.36 3.098.45l2.784.135c0-2.429-.135-3.373-.315-3.643-.18-.27-1.526-.585-2.963-.675l-2.605-.225-.18 1.844zm13.695 1.17c0 2.068.09 2.203 1.033 2.023.538-.135 1.841-.224 2.918-.224h1.886v-4.048h-5.837v2.249zM89.676 73.956c.898 0 3.053.9 5.702 2.383 2.38 1.305 11.944 6.657 21.329 11.829a3698.88 3698.88 0 0021.778 12.008c2.604 1.394 5.478 3.283 6.421 4.228.898.944 1.841 2.293 2.065 3.058.269.944.18 1.799-.359 3.058-.584 1.394-1.347 2.114-4.086 3.643-1.841 1.079-11.54 6.701-21.553 12.503-9.969 5.802-20.296 11.783-22.9 13.312-2.56 1.53-5.658 2.969-6.826 3.239-1.706.359-2.424.314-3.502-.225-.719-.405-1.796-1.35-3.368-3.598l-.134-28.109c-.09-15.472 0-29.459.18-31.033.269-2.653.448-3.103 2.065-4.632 1.302-1.214 2.155-1.664 3.188-1.664z"
        fill={color}
      />
    </Svg>
  );
}
